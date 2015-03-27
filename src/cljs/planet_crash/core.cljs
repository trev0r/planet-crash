(ns planet-crash.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]

            [cljs.core.async :refer [<! >! alts! put! take! chan timeout]]
            [goog.events :as events]
            [planet-crash.clock :refer [clock]]
            [planet-crash.components :refer [mass-selecter]]
            [planet-crash.physics :as physics]
            [planet-crash.render :refer [render-chan]]
            )
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   )
  (:import [goog.events EventType]))

(defonce colors ["#F97A77" "#6699CC" "#99CC99" "#F99157" "#66CCCC" "#CC99CC" "#D27B53" "#A0A093" "#F2F0EC" "#00FFFF" "#E8E6DF"])

(defonce app-state (atom {
                          :width 1280
                          :height 700
                          :running? true
                          :selected-planet {}
                          :planets [
                                        ;sun
                                    {:position [640 350]
                                     :velocity [0 0]
                                     :radius 30
                                     :mass 333000
                                     :color "#FFCC66"
                                     :editable? false
                                     }
                                    {:position [640 150]
                                     :velocity [40.8 0]
                                     :radius 10
                                     :mass 50
                                     :color (first colors)
                                     :editable? false
                                     }
                                    {:position [640 50]
                                     :velocity [33.3 0]
                                     :radius 15
                                     :mass 1
                                     :color (second colors)
                                     :editable? false
                                     }
                                    ]
                          }))
(enable-console-print!)

(defn events->chan
  "Given a target DOM element and event type return a channel of
  observed events. Can supply the channel to receive events as third
  optional argument."
  ([el event-type] (events->chan el event-type (chan)))
  ([el event-type c]
     (events/listen el event-type
                    (fn [e] (put! c e)))
     c
     ))

(defn mouse-loc->vec
  "Given a Google Closure normalized DOM mouse event return the
  mouse x and y position as a two element vector."
  [e]
  [(.-clientX e) (.-clientY e)]
  )

(defn color [num-planets]
  (let [color-index (mod num-planets (count colors))]
    (nth colors color-index)
    ))

(defn new-planet [target position mass radius color]
  (let [velocity (physics/orbital-velocity position (:position target) (:mass target))]
    {:position position
     :velocity velocity
     :mass mass
     :radius radius
     :color color
     }
    ))

(defn main []
  "Wire everything, create all necessary channels, pretty much anything interesting happens here.
   Should probably be slimmed down... a lot."
  (om/root
   (fn [app owner]
     (reify
       om/IInitState
       (init-state [_]
         (let [[clk start stop :as c] (clock 30)
               running (:running? app)]
           (when (not running)
             (put! stop true))
           {:clock c}
           ))
       om/IDidMount
       (did-mount [_]
         (let [universe (om/get-node owner "universe-ref")
               context (.getContext (om/get-node owner "universe-ref") "2d")
               render  (render-chan context)
               [clock] (om/get-state owner :clock)
               clicks (events->chan universe EventType.CLICK
                                    (chan 1 (map mouse-loc->vec)))]

           (go-loop [_]
             (put! render (:planets @app))
             (let [[val ch] (alts! [clicks clock])]
               (condp = ch
                 ; Add a new planet when we get a click on the canvas.
                 clicks (let [sun (first (:planets @app)) ;gross
                              {:keys [mass radius]} (:selected-planet @app)
                              color (color (count (:planets @app)))
                              planet (new-planet sun val mass radius color)
                              ]
                          (om/transact! app :planets #(conj % planet))
                          (put! render (:planets @app))
                          )
                 ; Update the planets on every clock tick.
                 clock  (let [old-planets (:planets @app)
                              update-fn #(physics/update-planets % .3)]
                          (om/transact! app :planets update-fn)
                          (put! render (:planets @app))
                          )
                 )
               (recur)
               ))))

       om/IRender
       (render [_]
         (let [[_ start stop] (om/get-state owner :clock)]
           (dom/div nil
                    (dom/canvas #js {:id "universe"
                                     :width (app :width)
                                     :height (app :height)
                                     :ref "universe-ref"})

                    (dom/div #js {:id "sidebar"}
                             (dom/h1 #js {:id "title"} "Planet Crash")
                             (dom/div nil "Click on the type of body to add next:")
                             (om/build mass-selecter (:selected-planet app))
                             (dom/div #js {:id "control"}
                                      (dom/button #js {:className "btn btn-default"
                                                       :onClick (fn [_]
                                                                  (let [control (if (:running? @app) stop start)]
                                                                    (do
                                                                      (put! control true)
                                                                      (om/transact! app :running? not)
                                                                      )))
                                                       } (dom/span #js {:className (if (:running? app) "fa fa-pause" "fa fa-play")}))
                                      )))))))
   app-state
   {:target (. js/document (getElementById "app"))}))

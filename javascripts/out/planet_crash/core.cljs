(ns planet-crash.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.reader :as reader]
            [cljs.core.async :refer [<! >! alts! put! take! chan timeout]]
            [goog.events :as events])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [planet-crash.util :refer [combine-with]])
  (:import [goog.events EventType]))

(defonce colors ["#F97A77" "#6699CC" "#99CC99" "#F99157" "#66CCCC" "#CC99CC" "#D27B53" "#A0A093" "#F2F0EC" "#00FFFF" "#E8E6DF"])

(defonce app-state (atom {
                          :width 1280
                          :height 700
                          :running? true
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
   c))

(defn mouse-loc->vec
  "Given a Google Closure normalized DOM mouse event return the
  mouse x and y position as a two element vector."
  [e]
  [(.-clientX e) (.-clientY e)])

; Rendering
(defn set-background! [context]
  "Given a canvas context, set up the background. Currently all hard
   coded to the 1280 x 700 screen size. It looks like ooouter spaaaace"
  (let [gradient (.createRadialGradient context 640 350 5 640 350 640)]
    (do
      (.addColorStop gradient 0 "#666666")
      (.addColorStop gradient 1 "#212121")
      (set! (.-fillStyle context) gradient)
      (.fillRect context 0 0 1280 700)
      )))

(defn draw! [context {:keys [position radius color]}]
  "Given a canvas context and a map of planet info, draw the planet.
   It's just a circle."
  (let [[x y] position]
    (do
      (.beginPath context)
      (.arc context (.floor js/Math x) (.floor js/Math y) radius 0 (* 2 (.-PI js/Math)) false)
      (set! (.-fillStyle context) color)
      (.fill context)
      (set! (.-lineWidth context) 0)
      (set! (.-strokeStyle context) color)
      (.stroke context)
      )))

(defn render-chan [context]
  "Given a canvas context, create a channel that to render the planet animations."
  (let [c (chan)]
    (go-loop [_]
      (let [planets (<! c)]
        (set-background! context)
        (doseq [p planets]
          (draw! context p)
         )
        )
      (recur)
      )
    c
    ))

(defn clock
  "Create a channel which emits the current time every interval milliseconds.
  Any value written to start/stop will start/stop the messages. Taken from an
  om cookbook."
  [interval]
  (let [out (chan)
        start (chan)
        stop (chan)]
    (go-loop [running? true]
             (let [t (timeout interval)
                   [_ ch] (alts! [stop t start])]
               (when running?
                  (let [now (.now (.-performance js/window))]
                    (>! out now)))
               (condp = ch
                 stop (recur false)
                 t (recur running?)
                 start (recur true))))
    [out start stop]))

; Maths / Physics
(comment
  I stole these functions and the combine-with macro from somewhere online.
  It seems likes this is a performance bottleneck currently but I thought it
  would be nice since it allows easy vector math. Might take it out and just
  hard code the math.
  )
(defn add
  ([& args] (reduce (fn [A B] (combine-with A B clojure.core/+ add)) args)))
(defn sub
  ([& args] (if (= (count args) 1)
              (combine-with 0 (first args) clojure.core/- sub)
              (reduce (fn [A B] (combine-with A B clojure.core/- sub)) args))))
(defn mul
  ([& args] (reduce (fn [A B] (combine-with A B clojure.core/* mul)) args)))

(defn power [xs pow] (map (fn [x] (.pow js/Math x pow)) xs))

(defn acceleration [p1 p2 m]
  "Given two position vector and the mass of the second one, calculate the
   gravitational acceleration between them."
  (let [p (sub p1 p2)
        a-mag (- (.pow js/Math
                       (reduce + (power p 2))
                       -1.5))
        ]
    (if (= p1 p2)
      (mul 0 p)
      (mul (* m a-mag) p)
      )
    )
  )

(defn agg-acceleration [p0 ps]
  "Given a planet and a list of other planets, calculate the aggregate acceleration
  on the planet caused by the others."
  (let [accs (map (fn [{:keys [position mass]}] (acceleration p0 position mass)) ps)]
    (apply add accs)
    )
  )

(defn orbital-velocity [c1 c2 m]
  (let [[x y] (sub c1 c2)
        theta (.atan2 js/Math y x)
        r     (.pow js/Math (+ (* x x)  (* y y)) .5)
        v-mag (.pow js/Math (/ m r) .5)]
    [(* (- v-mag) (.sin js/Math theta)) (* v-mag (.cos js/Math theta))]
    ))

(defn update-planets [planets delta-t]
  "Given a list of planets and the amount of time that has passed, update the planets'
  position and velocity."
  (let [vs (map :velocity planets)
        ps (map :position planets)
        as (map (fn [p] (agg-acceleration p planets)) ps)
        vs-delta (map (fn [a] (mul a delta-t)) as)
        vs-new (map add vs vs-delta)
        ps-delta (map (fn [v] (mul v delta-t)) vs-new)
        ps-new (map add ps ps-delta)
        ]
    (into [] (map (fn [planet v p] (assoc planet :velocity (into [] v) :position (into [] p))) planets vs-new ps-new))
    ))

;; Inspection
(defn pr-map-cursor [cursor]
  (pr-str
   (into cljs.core.PersistentHashMap.EMPTY
         (om/value cursor))))

(defn handle-change [e cursor owner key]
  (let [value (.. e -target -value)]
    (try
      (let [data (reader/read-string value)]
        (do
          (om/transact! cursor key (fn [_] data))
          (om/set-state! owner key value))
        )
      (catch :default ex
        (om/set-state! owner key value)))))

(defn planet-editor [planet owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (if (:editable? planet)
                 (dom/div nil
                        (dom/code #js {:className "inspector"} "{:mass ")
                        (dom/input #js {:className "edit"
                                        :value (:mass planet)
                                        :size 10
                                        :onChange #(handle-change % planet owner :mass)
                                        })
                        (dom/code #js {:className "inspector"} ", :radius ")
                        (dom/input #js {:className "edit"
                                        :value (:radius planet)
                                        :size 40
                                        :onChange #(handle-change % planet owner :radius)
                                        })
                        (dom/code #js {:className "inspector"} ", :position ")
                        (dom/input #js {:className "edit"
                                        :value (om/value (:position planet))
                                        :size 40
                                        :onChange #(handle-change % planet owner :position)
                                        })

                        (dom/code #js {:className "inspector"} ", :velocity ")
                        (dom/input #js {:className "edit"
                                        :value (om/value (:velocity planet))
                                        :size 45
                                        :onChange #(handle-change % planet owner :velocity)
                                        })
                        (dom/code #js {:className "inspector"} " }")
                        )
                 (dom/code nil (pr-map-cursor planet))
                 )
               ))))


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
           )
         )

       om/IDidMount
       (did-mount [_]
         (let [universe (om/get-node owner "universe-ref")
               context (.getContext universe "2d")
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
                              color-index (mod (count (:planets @app)) (count colors))
                              initial-velocity (orbital-velocity val (:position sun) (:mass sun))
                              new-planet {:position val
                                          :velocity initial-velocity
                                          :radius 10
                                          :mass 1
                                          :color (nth colors color-index)
                                          :editable? (not (:running? @app))
                                          }
                              ]
                          (om/transact! app :planets #(conj % new-planet))
                          (put! render (:planets @app))
                          )
                 ; Update the planets on every clock tick.
                 clock  (let [old-planets (:planets @app)
                              update-fn #(update-planets % .3)]
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
                    (dom/div nil
                             (dom/label nil "Click to add a planet ")
                             (dom/button #js {:onClick (fn [_]
                                                         (do
                                                           (put! stop true)
                                                           (om/update! app :running? false)
                                                           (om/transact! app :planets (fn [ps] (into [] (map #(assoc % :editable? true) ps)))
                                                                         )))
                                              } "Pause")
                             (dom/button #js {:onClick (fn [_]
                                                         (do
                                                           (put! start true)
                                                           (om/update! app :running? true)
                                                           (om/transact! app :planets (fn [ps] (into [] (map #(assoc % :editable? false) ps)))
                                                                         )))
                                              } "Play"))
                    (dom/div nil
                             (apply dom/div nil
                                    (om/build-all planet-editor (:planets app))
                             ))
                  )
           )
         )
       ))
   app-state
   {:target (. js/document (getElementById "app"))}))

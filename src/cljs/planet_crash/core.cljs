(ns planet-crash.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! alts! chan timeout]])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(defonce app-state (atom {:text "Hello Chestnut!"
                          :width 1280
                          :height 900}))
(enable-console-print!)
;; (defn main []
;;   (om/root
;;     (fn [app owner]
;;       (reify
;;         om/IRender
;;         (render [_]
;;           (dom/h1 nil (:text app)))))
;;     app-state
;;     {:target (. js/document (getElementById "app"))}))
(defn main []
  (om/root
   (fn [app owner]
     (reify
       om/IInitState
       (init-state [_]
         {:clock (clock 30)})
       om/IWillMount
       (will-mount [_]
         (let [[clock] (om/get-state owner :clock)]
           (go-loop []
             (let [now (<! clock)
                   elapsed-time (- now (om/get-state owner :start-time))]
               (om/set-state! owner :elapsed-time elapsed-time))
             (recur))))
       om/IDidUpdate
       (did-update [_ _ {:keys [elapsed-time]}]
         ;(println "update!" elapsed-time)
         (orbit (om/get-node owner "universe-ref") elapsed-time))
       ;  (set-background (om/get-node owner "universe-ref") "#777777")
       ;  (add-sun (om/get-node owner "universe-ref")))

       om/IDidMount
       (did-mount [_]
         (set-background (om/get-node owner "universe-ref") "#777777")
         (add-sun (om/get-node owner "universe-ref"))
         (add-planet (om/get-node owner "universe-ref")))

       om/IRender
       (render [_]
         (dom/canvas
          #js {:id "universe"
               :width (app :width)
               :height (app :height)
               :ref "universe-ref"}))))
   app-state
   {:target (. js/document (getElementById "app"))}))


(defn set-background [canvas background-color]
  (let [context (.getContext canvas "2d")]
    (set! (.-fillStyle context) background-color)
    (.fillRect context 0 0 1280 900)
    ))

(defn add-sun [canvas]
  (let [context (.getContext canvas "2d")
        center-y 900/2
        center-x 1280/2
        radius  70]
    (do
      (.beginPath context)
      (.arc context center-x center-y radius 0 (* 2 (.-PI js/Math))  false)
      (set! (.-fillStyle context) "#FFCC66")
      (.fill context))))

(defn add-planet [canvas]
  (let [context (.getContext canvas "2d")
        center-y (- 900/2 300)
        center-x 1280/2
        radius  20]
    (do
      ;(.save context)
      (.beginPath context)
      (.arc context center-x center-y radius 0 (* 2 (.-PI js/Math))  false)
      (set! (.-fillStyle context) "#F97A77")
      (.fill context)
      ;(.restore context)
      )))

(defn clock
  "Create a channel which emits the current time every interval milliseconds.
  Any value written to start/stop will start/stop the messages."
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

(defn orbit [canvas time]
  (let [context (.getContext canvas "2d")]
    (do
      (.clearRect context 0 0 1280 900)
      (.save context)
      (set! (.-fillStyle context) "#777777")
      (.fillRect context 0 0 1280 900)
      (.restore context)

      (.save context)
      (.beginPath context)
      (.arc context 1280/2 900/2  70 0 (* 2 (.-PI js/Math))  false)
      (set! (.-fillStyle context) "#FFCC66")
      (.fill context)
      (.restore context)

      ; planet
      (.save context)
      (.translate context 1280/2 900/2)
      (.rotate context (* 2 (.-PI js/Math) (/ time 5000)))
      (.translate context 0 300)


      (.save context)
      (.beginPath context)
      (.arc context 0 0 20 0 (* 2 (.-PI js/Math))  false)
      (set! (.-fillStyle context) "#F97A77")
      (.fill context)
      (.restore context)
      ;;
      (.restore context)

      )))

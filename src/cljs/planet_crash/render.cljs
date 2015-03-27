(ns planet-crash.render
  (:require [cljs.core.async :refer [chan]]
            )
  (:require-macros [cljs.core.async.macros :refer [go-loop]]
                   )
  )

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

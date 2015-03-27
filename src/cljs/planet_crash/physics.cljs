(ns planet-crash.physics
  (:require-macros [planet-crash.util :refer [combine-with]])
  )

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

(ns planet-crash.util)

(defmacro combine-with
  [A B op fun]
  `(cond
    (and (number? ~A) (number? ~B)) (~op ~A ~B)
    (and (coll? ~A) (coll? ~B)) (map ~op ~A ~B)
    (and (number? ~A) (coll? ~B)) (map ~op (replicate (count ~B) ~A)  ~B)
    (and (coll? ~A) (number? ~B)) (map ~op ~A (replicate (count ~A) ~B))))

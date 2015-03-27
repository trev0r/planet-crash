(ns planet-crash.components
  (:require  [om.core :as om :include-macros true]
             [om.dom :as dom :include-macros true]
             [cljs.reader :as reader]
             )
  )

(defonce preset-sizes [{:mass 1     :radius 15  :title "Earth"}
                       {:mass 5     :radius 20  :title "Super-Earth"}
                       {:mass 15    :radius 25  :title "Ice giant"}
                       {:mass 300   :radius 40  :title "Giant planet"}
                       {:mass 5000  :radius 60  :title "Brown dwarf"}
                       {:mass 30000 :radius 100 :title "Dwarf starf"}])

(defn mass-selecter [selected-mass owner]
  (reify
     om/IDidMount
     (did-mount [_]
       (om/update! selected-mass (first preset-sizes))
       )
    om/IRender
    (render [_]
      (dom/div #js {:id "mass-selecter"}
               (apply dom/ul #js {:id "masses"
                                  :className "nav nav-pills nav-stacked"}
                      (for [p preset-sizes]
                        (dom/li #js {:className (if (= p selected-mass) "active" nil)}
                                (dom/a #js {:href "#"
                                            :className "mass-sel"
                                            :onClick #(om/update! selected-mass p
                                                                    )}

                                       (:title p)
                                       (dom/span #js {:className "badge pull-right"}
                                                 (str (:mass p)  "x"))
                                       ))))

               ))))

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

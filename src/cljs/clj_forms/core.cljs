(ns clj-forms.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]
              [ajax.core :refer [GET POST]]))

;; -------------------------
;; Views


(def chart-config
  {:chart {:type "bar"}
   :title {:text "Historic World Population by Region"}
   :subtitle {:text "Source: Wikipedia.org"}
   :xAxis {:categories ["Africa" "America" "Asia" "Europe" "Oceania"]
           :title {:text nil}}
   :yAxis {:min 0
           :title {:text "Population (millions)"
                   :align "high"}
           :labels {:overflow "justify"}}
   :tooltip {:valueSuffix " millions"}
   :plotOptions {:bar {:dataLabels {:enabled true}}}
   :legend {:layout "vertical"
            :align "right"
            :verticalAlign "top"
            :x -40
            :y 100
            :floating true
            :borderWidth 1
            :shadow true}
   :credits {:enabled false}
   :series [{:name "Year 1805"
             :data [107 31 635 203 2]}
            {:name "Year 1900"
             :data [133 156 947 408 6]}
            {:name "Year 2008"
             :data [973 914 4054 732 34]}]
   })

(defn chart-did-mount [this]
  (js/Highcharts.Chart. (reagent/dom-node this) (clj->js chart-config)))

(defn chart-render []
  [:div {:style {:min-width "310px" :max-width "800px"
                 :height "400px" :margin "0 auto"}}])

(defn chart []
  (reagent/create-class {:reagent-render chart-render
                         :component-did-mount chart-did-mount}))

(defn prompt-message
  "A prompt that will animate to help the user with a given input"
  [message]
  [:idv {:class "my-messages"}
    [:div {:class "prompt message-animation"} [:p message]]])


(defn input
  "Creates an input box and a prompt box that appears above the input when the input comes into focus."
  [label-value input-name input-type input-element-arg]
  (let [input-focus (atom false)]
    (fn []
      [:div
       [:label label-value]
       [input-element input-name input-name input-type input-element-arg input-focus]])))

(defn weight-form
  [weight-atom]
  (input "Weight (lbs):" "weight" "number" weight-atom))


(defn handler [response]
      (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
      (.log js/console (str "something bad happened: " status " " status-text)))

(defn  submitWeight! [w]
       (POST "/addWeight"
                               {:params {:weight w}
                                :format :json
       :handler handler
       :error-handler error-handler}))


(def lw (atom nil))

(defn lastWeight [] (GET "/lastWeight" :handler (fn [response] (reset! lw (response "weight")))))


(defn home-page []
  (let [weight (atom nil)]
       (lastWeight)
    (fn []
      [:div {:class "form-wrapper"} [:h2 "Welcome to Chad's Weight Measurement App"]
       [:p (str "Last weight was: " @lw)]
      [:form 
        [weight-form weight]
        [:input {:type "button" :value "Submit!" :on-click #(submitWeight! @weight)}]
      ]
       [:div "Weight is: " @weight]
       [chart]
       ])))

(defn current-page []
  [:div [(session/get :current-page)]])


(defn input-element
  "An input element which updates its value on change"
  [id name type value in-focus]
  [:input {:id id
           :name name
           :class "form-control"
           :type type
           :required ""
           :value @value
           :on-change #(reset! value (-> % .-target .-value))
           :on-focus #(swap! in-focus not)
           :on-blur #(swap! in-focus not)}])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
                    (session/put! :current-page #'home-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))

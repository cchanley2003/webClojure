(ns clj-forms.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

;; -------------------------
;; Views


(defn prompt-message
  "A prompt that will animate to help the user with a given input"
  [message]
  [:idv {:class "my-messages"}
    [:div {:class "prompt message-animation"} [:p message]]])


(defn input-and-prompt
  "Creates an input box and a prompt box that appears above the input when the input comes into focus."
  [label-value input-name input-type input-element-arg prompt-element]
  (let [input-focus (atom false)]
    (fn []
      [:div
       [:label label-value]
       (if @input-focus prompt-element [:div])
       [input-element input-name input-name input-type input-element-arg input-focus]])))

(defn weight-form
  [weight-atom]
  (input-and-prompt "Weight(lbs):" "weight" "number" weight-atom [prompt-message "Enter your weight?"]))

(defn home-page []
  (let [weight (atom nil)]
    (fn []
      [:div {:class "form-wrapper"} [:h2 "Welcome to Chad's Weight App"]
      [:form 
        [weight-form weight]
        [:input {:type "submit" :value "Submit"}]
      ]
       [:div "Weight is: " @weight]])))

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

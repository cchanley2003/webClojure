(ns clj-forms.handler
  (:require
    [compojure.core :refer [GET defroutes routes POST]]
    [compojure.route :refer [not-found resources]]
    [hiccup.page :refer [include-js include-css html5]]
    [ring.middleware.json :as middleware]
    [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
    [config.core :refer [env]]
    [ring.util.response :refer [resource-response response]]
    [clojure.tools.logging :as log]))

(def mount-target
  [:div#app
      [:h3 "ClojureScript has not been compiled!"]
      [:p "please run "
       [:b "lein figwheel"]
       " in order to start the compiler"]])

(defn head []
      (log/info "Loading head!")
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(def loading-page
  (html5
    (head)
    [:body {:class "body-container"}
     mount-target
     (include-js "/js/app.js")]))



(defroutes app-routes
           (GET "/" [] loading-page)
           (GET "/about" [] loading-page)
           (POST "/addWeight" req (println req) (response {:foo "bar"}))
  
  (resources "/")
  (not-found "Not Found"))

(def app  (-> app-routes
              (middleware/wrap-json-body)
              (middleware/wrap-json-response)
              (wrap-defaults api-defaults)) )

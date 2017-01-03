(ns clj-forms.handler
  (:require
    [compojure.core :refer [GET defroutes routes POST]]
    [compojure.route :refer [not-found resources]]
    [hiccup.page :refer [include-js include-css html5]]
    [ring.middleware.json :as middleware]
    [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
    [config.core :refer [env]]
    [ring.util.response :refer [resource-response response]]
    [clojure.java.jdbc :as sql]
    [clojure.tools.logging :as log]))

(let [db-host "localhost"
      db-port 5432
      db-name "drink_db"]
  (def db {:classname "org.postgresql.Driver" ; must be in classpath
           :subprotocol "postgresql"
           :subname (str "//" db-host ":" db-port "/" db-name)
           :user "app_user"
           :password "password"}))

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
     (include-js"http://code.highcharts.com/highcharts.js" "http://code.highcharts.com/modules/exporting.js" "/js/app.js" )]))

(defn updateNewDrink [body] (sql/insert! db :drinks  {:ounces (read-string (body "ounces"))
                                                      :abv (read-string (body "abv"))
                                                      :name (read-string (body "name"))
                                                      :brand (read-string (body "brand"))}))

(defn getLastWeight [] (first
                         (sql/query db
                                    ["select * from weights order by time desc limit 1"]
                                    {:row-fn #(% :weight)})))


(defroutes app-routes
           (GET "/" [] loading-page)
           (GET "/about" [] loading-page)
           (POST "/addDrink" req (updateNewDrink (req :body)) (response {:foo "bar"}))
           (GET "/lastWeight" [] (response {:weight (getLastWeight)}))
           (resources "/")
           (not-found "Not Found"))

(def app  (-> app-routes
              (middleware/wrap-json-body)
              (middleware/wrap-json-response)
              (wrap-defaults api-defaults)) )

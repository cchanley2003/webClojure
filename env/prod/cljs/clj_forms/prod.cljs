(ns clj-forms.prod
  (:require [clj-forms.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)

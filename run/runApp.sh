#!/bin/bash

java -jar /var/clojure/clj_forms.jar > /dev/null &  echo $! > /tmp/my-app.pid
exit

#!/bin/bash

java -jar /var/clojure/clj_forms.jar > /dev/null 2>&1 & echo $! > /tmp/my-app.pid


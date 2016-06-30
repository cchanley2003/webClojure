#!/bin/bash

java -jar /var/clojure/clj_forms.jar & echo $! > /tmp/my-app.pid

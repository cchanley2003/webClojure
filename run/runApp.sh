#!/bin/bash

java -jar target/clj_forms.jar & echo $! >>/tmp/my-app.pid

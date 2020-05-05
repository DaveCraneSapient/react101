#!/bin/sh

APP_CONFIG_JSON=${APP_CONFIG_JSON:-\{\}}

echo "injecting $APP_CONFIG_JSON"

sed -i "s/__APP_CONFIG_JSON__/${APP_CONFIG_JSON}/g" /app/local_config.js

nginx -g "daemon off;"
/bin/sh

#!/usr/bin/env bash

WEBROOT=/opt/efda-webscanner

mkdir -p $WEBROOT/scanners

curl -o $WEBROOT/scanners/dependency-check.zip -L \
    https://dl.bintray.com/jeremy-long/owasp/dependency-check-3.2.0-release.zip

# TODO: Check sha256 hash of download.

unzip $WEBROOT/scanners/dependency-check.zip -d $WEBROOT/scanners/

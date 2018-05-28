#!/usr/bin/env bash

WEBROOT=/opt/efda-webscanner

mkdir -p $WEBROOT
chown $SUDO_USER $WEBROOT
chmod 755 $WEBROOT

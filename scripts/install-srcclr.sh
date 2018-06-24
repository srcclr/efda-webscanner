#!/usr/bin/env bash

apt-key adv --keyserver keyserver.ubuntu.com --recv-keys DF7DD7A50B746DD4
add-apt-repository "deb https://download.sourceclear.com/ubuntu stable/"
apt-get update
apt-get install srcclr

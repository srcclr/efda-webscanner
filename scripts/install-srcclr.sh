#!/usr/bin/env bash

sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys DF7DD7A50B746DD4
sudo add-apt-repository "deb https://download.sourceclear.com/ubuntu stable/"
sudo apt-get update
sudo apt-get install srcclr

#!/usr/bin/env bash

pipenv run pip freeze > requirements.txt
docker build -t efda .

rm requirements.txt

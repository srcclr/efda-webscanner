FROM ubuntu:latest
MAINTAINER Terry Chia <terrycwk1994@gmail.com>

RUN apt-get update && apt-get install -y \
	python3 \
	python3-pip \
	curl \
	unzip \
	software-properties-common \
	python-software-properties \
	apt-transport-https

COPY scripts/make-opt-directory.sh make-opt-directory.sh
RUN ./make-opt-directory.sh

COPY scripts/install-dependency-check.sh install-dependency-check.sh
RUN ./install-dependency-check.sh

COPY scripts/install-srcclr.sh install-srcclr.sh
RUN ./install-srcclr.sh

COPY app/ app/
COPY efda/ efda/
COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

ENV FLASK_APP=app/server.py
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]

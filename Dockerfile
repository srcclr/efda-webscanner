FROM ubuntu:latest
MAINTAINER Terry Chia <terrycwk1994@gmail.com>

RUN apt-get update && apt-get install -y \
	curl \
	unzip \
	software-properties-common \
	python-software-properties \
	apt-transport-https \
	default-jdk \
	git

RUN add-apt-repository ppa:jonathonf/python-3.6 && \
	apt-get update && \
	apt-get install -y python3.6

COPY scripts/make-opt-directory.sh make-opt-directory.sh
RUN ./make-opt-directory.sh

COPY scripts/install-dependency-check.sh install-dependency-check.sh
RUN ./install-dependency-check.sh

COPY scripts/install-srcclr.sh install-srcclr.sh
RUN ./install-srcclr.sh

RUN mkdir /efda-webscanner
WORKDIR /efda-webscanner

# We copy the .git directory as a workaround as the srcclr scanner requires
# an initialized Git repository to work.
COPY .git/ .git/
COPY app/ app/
COPY efda/ efda/
COPY requirements.txt requirements.txt

RUN curl https://bootstrap.pypa.io/get-pip.py | python3.6
RUN python3.6 -m pip install -r requirements.txt

ENV FLASK_APP=app/server.py
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]

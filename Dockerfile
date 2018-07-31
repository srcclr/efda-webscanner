FROM ubuntu:16.04
MAINTAINER Terry Chia <terrycwk1994@gmail.com>

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y \
	curl \
	unzip \
	software-properties-common \
	apt-transport-https \
	default-jdk \
	git \
	npm \
	ruby-dev \
	composer \
	ant

RUN add-apt-repository ppa:jonathonf/python-3.6 && \
	apt-get update && \
	apt-get install -y python3.6

RUN LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php && \
	apt-get update && apt-get install -y \
		php7.1 \
		php7.1-mbstring \
		php7.1-dom

RUN echo "deb https://dl.bintray.com/sbt/debian /" | tee -a /etc/apt/sources.list.d/sbt.list
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
RUN apt update
RUN apt install sbt

# Install dependencies for scanners.
RUN npm install -g bower yarn
RUN gem install bundler

COPY scripts/make-opt-directory.sh make-opt-directory.sh
RUN ./make-opt-directory.sh

COPY scripts/install-dependency-check.sh install-dependency-check.sh
RUN ./install-dependency-check.sh

COPY scripts/install-srcclr.sh install-srcclr.sh
RUN ./install-srcclr.sh

RUN mkdir /efda-webscanner
WORKDIR /efda-webscanner

COPY requirements.txt requirements.txt

RUN curl https://bootstrap.pypa.io/get-pip.py | python3.6
RUN python3.6 -m pip install -r requirements.txt

# We copy the .git directory as a workaround as the srcclr scanner requires
# an initialized Git repository to work.
COPY .git/ .git/
COPY app/ app/
COPY efda/ efda/

# Configure stuff required for Bower.
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN echo "allow_root: true" > efda/javascript/bower/bower-version-ranges/srcclr.yml

# Setup the directory to properly serve React.
COPY ui/build/index.html app/static/index.html
COPY ui/build/favicon.ico app/static/favicon.ico
COPY ui/build/service-worker.js app/static/service-worker.js
COPY ui/build/static/css/ app/static/css/
COPY ui/build/static/js/ app/static/js/

ENV FLASK_APP=app/server.py
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]

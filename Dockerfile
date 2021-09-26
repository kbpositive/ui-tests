FROM debian:latest

ENV PORT=8080, K_SERVICE=ui-tests, K_REVISION=ui-tests.1, K_CONFIGURATION=ui-tests

RUN mkdir /usr/local/nvm
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update \
    && apt-get install -y curl git \
    && apt-get -y autoclean

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 16.10.0

RUN curl --silent -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

WORKDIR /usr/app
RUN git clone https://github.com/kbpositive/ui-tests.git \
    && cd ui-tests \
    && npm i \
    && npm run build

WORKDIR /usr/app/ui-tests
CMD ["npm", "start"]


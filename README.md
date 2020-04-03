# Gym App

[![CircleCI](https://circleci.com/gh/MichalZalecki/react-boilerplate-lite.svg?style=svg)](https://circleci.com/gh/MichalZalecki/react-boilerplate-lite)

**Read more:** [What's the best React boilderplate and why you cannot clone it from GitHub?](https://michalzalecki.com/the-best-react-boilerplate/)

Gym App modern React apps build on **webpack** with **hot reloading** support.

## Deploy

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Docker

    docker build -t gym-app .
    docker run --rm -it -p 8080:8080 gym-app

### Docker Compose

    docker-compose up

## Installation

```
cp .env-example .env
yarn install
```

## Usage

```
yarn start                # start server
yarn build                # production build (remember to build with NODE_ENV=production)
yarn start:dashboard      # start server using webpack-dashboard
yarn lint                 # run ESLint
yarn format               # run prettier
yarn test                 # run Jest
```

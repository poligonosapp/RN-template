#!/bin/bash
yarn run build && yarn run test  && yarn run test:watch  && yarn test:server && yarn run serve && yarn run start

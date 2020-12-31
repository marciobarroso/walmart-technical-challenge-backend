NPM_BIN=./node_modules/.bin
NODE_ENV ?= dev

clean:
	$(NPM_BIN)/rimraf dist logs

install:
	npm i

build: lint
	tsc -p tsconfig.release.json

test: build lint
	NODE_ENV=test $(NPM_BIN)/jest --coverage

lint:
	$(NPM_BIN)/eslint . --ext .ts
	
run: build
	NODE_ENV=$(NODE_ENV) $(NPM_BIN)/nodemon -e js,ts,json --exec $(NPM_BIN)/ts-node ./src/index.ts

run-docker: build
	NODE_ENV=$(NODE_ENV) docker-compose up --build --force-recreate -d

run-docker-%: build
	NODE_ENV=${*} docker-compose up --build --force-recreate -d

run-%: build
	NODE_ENV=${*} $(NPM_BIN)/nodemon -e js,ts,json --exec $(NPM_BIN)/ts-node ./src/index.ts

db-connect:
	docker exec -it wtc-backend-database bash

.PHONY: clean install build test lint run run-docker run-docker-% run-% db-connect
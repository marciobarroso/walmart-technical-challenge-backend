# Walmart Technical Challenge for Fullstack Developer

# Tech Stack

## [NodeJS](https://nodejs.org/) >= 14.15.3 :white_check_mark:

I choose nodejs because of the popularity of this javascript engine and because I love everything about javascript.

## [Typescript](https://www.typescriptlang.org/) :white_check_mark:

Why don't have types on javascript? To avoid complications on runtime use types and on compilation time check your code for errors.

## [Express](https://expressjs.com/) :white_check_mark:

Fast, unopinionated, minimalist web framework for Node.js

## [ESLint](https://eslint.org/) :white_check_mark:

ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

## [Jest](https://jestjs.io/) :white_check_mark:

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
For this API we need unit and integration tests with coverage.

## [Mongoose](https://mongoosejs.com/) :white_check_mark:

Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

## [Docker](https://www.docker.com/) :white_check_mark:

Developing apps today requires so much more than writing code. Multiple languages, frameworks, architectures, and discontinuous interfaces between tools for each lifecycle stage creates enormous complexity. Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project.

## [Retire](https://retirejs.github.io/retire.js/) :white_check_mark:

Dependency Check based on OWASP to avoid using on the project insecure libraries

# TO EXECUTE

## Locally

In order to execute locally the application, you will need to build and create the containers with the database

To do that, just run:

```
make docker-build
```

Make sure to have node >= 14 installed
This command will build the images of the application, the database and the database seed

After build, you just need to run the application locally using this command:

```
npm start
```

## Using Docker

After doing the build of the images, you need create the containers:

```
make docker-run
```

This command will build the images and run the containers to execute the application

The application will be available on [http://localhost:3000/api/v1/products](http://localhost:3000/api/v1/products)

## To execute test

For this development I've decided to use [TDD](https://en.wikipedia.org/wiki/Test-driven_development) as development methodology. I've created unit and integrated tests with > 90% of line coverage

```
npm run test
```

## PENDING

- [ ] Create paging logic

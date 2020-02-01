# IlegraFlix-Angular

## Build status:

 **[CircleCI](https://circleci.com/gh/riguelbf/ilegra-flix-angular)**

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/riguelbf/ilegra-flix-angular/master?style=for-the-badge)

![CircleCI](https://img.shields.io/circleci/build/gh/riguelbf/ilegra-flix-angular/master?style=for-the-badge)

![GitHub All Releases](https://img.shields.io/github/downloads/riguelbf/ilegra-flix-angular/total?style=for-the-badge)


## Development server

Run `npm run start-fullstack` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Together on background will be executed a fake backeend server on the port http://localhost:3000.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run ` npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running tests coverage

Run `npm run test-coverage` to execute the unit tests with coverage report.

## Using docker

### Building image
Run `npm run docker-build` to build a docker image of project.

### Executing project from docker image
Run `npm run docker-run` to run the project from a docker image. Obs: for to use this command, is necessary to have docker image pre builded.
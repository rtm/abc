# ABC Racing Company website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Service workers

This app implements service workers.
However, please note that `ng serve` (and thus also `npm run start` do not support service workers.
We recomment the `http-server` package from npm.
See https://angular.io/guide/service-worker-getting-started for more information.

## Server-side rendering

This app uses Angular server-side rendering (SSR, known as "Angular Universal" to reduce initial load times.
The initial page is rendered on the server, including its content.
Server-side rendering is controlled by npm scripts such as `build:ssr` and `serve:ssr`.
You must also change one line in `src/app/app.module.ts` when doing server-side rendering,
to set up the local app to be able to be transitioned to.

The deployment of the SSR version to Firebase hosting requires special gymnastics and is not implemented.
The contents of `dist/server` should be deployable to any web server and function correctly,
but this has not been tested.

## Miscellaneous

1. The locked-version of `@angular-devkit/schematics` in `package.json` is to deal with a bug in `ng new pwa`. See https://github.com/angular/angular-cli/issues/11663 for more information.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

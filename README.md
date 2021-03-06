# ABC Racing Company website

This repo holds a simple proof-of-concept of a responsive website for a fictional racing company,
implementing a Progressive Web App using Firebase and Angular.

More information may be found within the app itself under the "Help" menu item.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` (or `npm run start`) for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/browser` directory. Use the `--prod` flag for a production build.

## Running unit tests

Unit tests are not available. When they are, Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

End-to-end tests are not available.
When they are, run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Service workers

This app implements service workers.
However, please note that `ng serve` (and thus also `npm run start` do not support service workers.
We recommend the `http-server` package from npm.
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

## Accessibility

Accessibility is not implemented fully in this version of the app.
A more complete implementation would implement keyboard navigation as provided for in the CDK `a11y` library.
In addition, items should be assigned "roles" and `aria-*` attributes.

Bits and pieces of work-in-progress may be found in `app/sidenav`.

## Miscellaneous

1. The locked-version of `@angular-devkit/schematics` in `package.json` is to deal with a bug in `ng new pwa`. See https://github.com/angular/angular-cli/issues/11663 for more information.

## Attributions

Icons in `src/manifest.json` (`src/assets/icons`) from https://www.iconfinder.com/icons/44797/car_icon.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# NewsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Using Now Server Deployment

Install Now by running: npm install -g now. This will download the Now CLI.

Run the following command to build the angular project for production: 'ng build --c=production --base-href /'. This will create a dist folder. 
Traverse into the dist folder and step into the project folder, in my case it was called news-app.
Inside here run the command 'now'. 
This will upload all your files in the dist folder to the server and the CLI should produce a URL for you to access your app.


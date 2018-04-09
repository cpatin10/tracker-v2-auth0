# TrackerV2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

This app is built using Node.js and Express for the back end, Angular to create the font end and MongoDB for data persistence. The web server is provided by NGINX. Deployment is achieve using kubernetes, and the databases are inside the following machines for persistance: 10.131.137.173, 10.131.137.193, 10.131.137.189. These machines have the 27017 port open in order to make a replica set between them.

![alt text](https://github.com/cpatin10/tracker-v2-auth0/blob/master/entregas/TelematicaVistaArqP2.jpg)

## Collaborators

Catalina Patiño Forero<br />
Juan Pablo Calad Henao<br />
Mateo Agudelo Toro

## URL de ejecución pública y segura

[proyecto2.dis.eafit.edu.co](http://proyecto2.dis.eafit.edu.co/)

## Theory

[Go to theory](https://github.com/cpatin10/tracker-v2-auth0/blob/master/entregas/Marco%20teorico.pdf)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

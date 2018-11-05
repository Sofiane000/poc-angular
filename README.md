## Atlas-ui-demo

This project make use of atlas-ui components.
It consists of two project one for reusable components and other one for the hosting application.

## Installation Steps for Atlas-UI

Run-- 
npm-intall in root directory.
npm-install in atlas-ui-angular directory.

## Build Atlas-UI 
Run-- npm run package command to build the common component project.
This command will take care of building and packaging of the module.

## Installation Steps for Atlas-UI-View
Run--
npm install to install the all packages except Atlas-ui-angular

## How to add reference to atlas-ui-angular
After npm install run the below command
npm install ../atlas-ui/dist/atlas-ui-angular/atlas-ui-angular-0.0.1.tgz

## Run Test Case 
Run-- npm run test on terminal in host directory where package.json is present.This will run tests for host application.
To run tests for Atlas-Ui run-- ng test atlas-ui

## Publish npm package online
 In host application run npm login and enter credentials and then npm publish.


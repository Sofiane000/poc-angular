
## Atlas-ui-demo

This project make use of atlas-ui components.
It consists of two project one for reusable components and other one for the hosting application.

## Installation Steps for atlas-web-components

Run-- 
npm-intall in root directory.
npm-install in atlas-ui-angular directory.

## Build atlas-web-components 
Run-- npm run package command to build the common component project.
This command will take care of building and packaging of the module.




## Installation Steps for atlascomplete-web
Run--
npm install to install the all packages except Atlas-ui-angular



## How to add reference to atlas-ui-angular
After npm install run the below command
npm install ../atlas-web-components/dist/atlas-ui-angular/atlas-ui-angular-0.0.1.tgz

## Run Test Case 
Run-- npm run test on terminal in host directory where package.json is present.This will run tests for host application.
To run tests for atlas-web-components run-- ng test atlas-ui

## Publish npm package online
 In host application run npm login and enter credentials and then npm publish.



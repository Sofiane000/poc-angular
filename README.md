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

## How to add reference to atlas-web-services

After npm install run the below command
npm install ../atlas-services/dist/atlas-web-services/atlas-web-services-0.0.1.tgz

## Run Test Case

Run-- npm run test on terminal in host directory where package.json is present.This will run tests for host application.
To run tests for atlas-web-components run-- ng test atlas-ui

## Publish npm package online

In host application run npm login and enter credentials and then npm publish.

## Configuration for VS code

```json
{
    "workbench.iconTheme": "material-icon-theme",
    "editor.codeLens": false,
    "editor.renderWhitespace": "none",
    "editor.autoIndent": true,
    "editor.fontSize": 12,
    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true,
    "editor.fontWeight": "normal",
    "editor.formatOnPaste": false,
    "editor.formatOnType": true,
    "editor.letterSpacing": 1,
    "editor.tabSize": 4,
    "editor.wordWrap": "off",
    "editor.formatOnSave": true,
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 2000,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "files.hotExit": "onExit",
    "files.defaultLanguage": "typescript",
    "files.trimTrailingWhitespace": true,
    "breadcrumbs.enabled": true,
    "window.zoomLevel": 0
}
```

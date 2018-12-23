# Atlas web components build with Angular Elements

This project consists of wrappers of kendo ui as elements.

## Project Structure

The project is a standard Angular 7 project with a few additions:

```
src/app/element.module.ts   Module which will import all the atlas modules
src/main.element.ts         bootstrap the Element Module
src/polyfills.element.ts    polyfills for the Element Module
build-elements.js           script to generate the exported file and demo project
```

## Build

There is a separate build configuration for elements.
Run `npm run build:elements` to build the angular elements. This creates a build in `dist/elements-build` that only contains `ElementModule`.

After this build the `./build-elements.js` script creates the final js file and
demo project in `dist/elements`.

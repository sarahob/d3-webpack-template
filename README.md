# d3-webpack-template

This is a very simple starter template to bootstrap a [d3.js](https://d3js.org/) app with webpack. 

I wanted a really simple starter app to create some d3 visualizations without a lot of other overhead.

## Configuration includes: 
- dev server with hot reloading 🔥
- loaders for managing CSS 🎨
- loader for managing images 📸 
- loader for managing fonts 💬

## How to use:

`npm run start`
This will run the webpack dev config. The dev server will be available on `localhost:8080`. If you make changes to any files the server will reload automatically to reflect the new changes. 

`npm run build`
This will run the webpack prod config. The app will be bundled and available from the `/dist` folder. 

## Note: 
This app imports all of d3 using `import * as d3 from d3.` This allows access to all d3 functions from the d3 namespace and is easier for getting started. However I do not recommend this for production level apps. It is best to only import modules as needed. 

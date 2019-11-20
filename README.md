# Project Summary

## Start date

9th Jan. 2019

## Objective

- First stage: Building currency pricer.
- Vision: Keep extend and upgrade currency pricer, then extend feature to remittance flow

## SKill stack

- Webpack: 4.28.1
- Babel-core: 7.2.2

## Project in Notion

https://www.notion.so/Currency-pricer-5ecdfd491152447fb19dcd35c7004a7d

## Folder introduction

- **public** folder: contain all **front-end** materials, eg. javascripts, scss, images.
- **src** folder: contain all **back-end** materials, eg. rests service.

## Webpack and Babel

- This project will use nodejs to apply webpack, then compile front-end js & sass into **/public/compile** folder.
- This project use babel to translate some of ES6 js symbol which nodejs didn't support in native.

## Build product enviroment

Please follow following 2 steps to build product enviroment

1. **npm start**: To compile front-end resources into /compile/build.js.
2. **use browser open index.html**: To see/develope front-end.

## code smell
This project use standardjs to do code smell.
You can use npm run code:smell to test your project.

`Not introduce jsx format yet.`
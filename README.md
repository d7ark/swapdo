# SwapDo - simple todo list to test some new technologies/technics.

Log in, add some activities to do, log out. Get back and see you list waiting.

## Idea

Application requirements:

- written using TDD approach (both Acceptance TDD and Developer TDD - as in [Introduction to TDD](http://www.agiledata.org/essays/tdd.html)),
- using EcmaScript 2016 (and previous) goodies,
- favoring Generators and Promises over callbacks (possibly getting rid of them entirely),
- static type check,
- using ELM architecture (in place of React/Redux as it might be too hefty for simple project like this),
- 100% code coverage.

## Execution

Application stack:

- node.js
- koa.js
- mongoDb
- flow
- tape
- istanbul

## Getting Started

Project is fairly easy to set up.

<!-- - TODO: add git path - -->

```
$ git clone [] && cd swapdo
$ npm install
$ npm start
```

go to 127.0.0.1:3030/

### Prerequisites

<!-- - TODO: replace node version with actual first node to support es16 --> All you need installed globally is npm and node higher than v8.2.1.

## Running the tests

```
npm test
```

## Running the coverage tests

```
npm run-script coverage-test
```

## Thanks

Heartful thanks to everyone (especcialy open source community) making learning new things easy and fun. Below are listed sites that helped me get this started and running.

- [nodeschool's workshoppers](https://nodeschool.io/#workshoppers) especcialy esnextgeneration, learngenerators, kickoffkoa,
- [multiple](https://github.com/dwyl/learn-tdd)[dwyl](https://github.com/dwyl/learn-elm-architecture-in-javascript/)[tutorials](https://github.com/dwyl/learn-tape) and more,
- [agile data](http://www.agiledata.org/essays/tdd.html) and [agile modelling](http://www.agilemodeling.com/essays/amdd.htm) and more,
- tutorials/documentation for [koa](http://koajs.com/#context), [flow](https://flow.org/en/docs/), [npm](https://docs.npmjs.com/),
- [MDN](https://developer.mozilla.org/) and [stackoverflow](https://stackoverflow.com/),
- and a lot of blog posts and materials linked (or not) in former.

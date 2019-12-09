# Making TS and Express work together
This is part of a series of small projects I did in an effort to learn about Typescript design patterns. The goal of this project was to explore how it can be extremely time consuming to make certain JavaScript libraries work properly with TypeScript.

## Installation

Use the package manager [npm](https://nodejs.org/en/)  to install TS + Express Server.

```bash
npm install
npm start
```

## Project Breakdown

There are three ways to make TypeScript work with JavaScript libraries:
1. Use the library normally, adding in basic type annotations where possible (easiest)
2. Use a TS adapter library that has helpers for using your library with TS
3. Twist your library to work with TS classes (hardest)

In this project I went with option 3. The only reason someone would do this is to either get better type safety (by helping TS do a better job of catching errors) or to significantly enhance the developer experience. For this project the second reason applies.

This project makes use of TS decorators to enhance the developer experience.
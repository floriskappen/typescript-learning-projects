# Tiny Web Framework with Typescript
This is part of a series of small projects I did in an effort to learn about Typescript design patterns. The goal of this project was to juxtapose approaches of inheritance vs composition. This can be seen in the models folder.

## Installation

Use the package manager [npm](https://nodejs.org/en/)  to install Task Manager Tiny Web Framework with Typescript.

```bash
npm install
npm install -g json-server
```

## Project Breakdown

Many of the styles and conventions in this project take inspiration from two old Javascript frameworks called Marionette.js and Backbone.js. Similarly to Backbone.js, events were written like '.on' and '.trigger'. Models like 'get', 'set', 'fetch', 'sync' and 'save' were also implemented to an extent.
Similarly to Marionette, this project also makes use of Collections, Views and even regions. Note that they were still written from scratch.
# React & Redux with TypeScript

This is part of a series of small projects I did in an effort to learn TypeScript design patterns. The goal of this projects is to make React & Redux work together with Typescript.

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install Bubble Sort with Node.js & TypeScript.

```bash
npm install
```

## React & Redux with TypeScript

There are several things to keep in mind when using TypeScript with React & Redux.

1. When we create a component, we also define an interface that is going to define the different props our component is going to receive.
2. The type definition files for react-redux and redux may not work together perfectly in certain areas.
3. When initializing state in a React component, we can either set up an interface describing the structure of state and then pass that in as the second argument to our generic in the component class and define and initialize the state object inside the constructor, or we can just initialize our state object inline without having to pass in the interface as the second argument to our generic. Either way is 100% appropriate and it just comes down to what we want to do.
4. Action types are defined with an enum in a separate file(./src/actions/types.ts). In that file we also exported a type union between all the different action types we expect to have. This Action type will be imported any time we add in a reducer in order to annotate the actual action argument.
5. In the reducer file(./src/reducers/todos.ts) we imported Action as mentioned in 4. and used it to annotate the Action argument. This way, inside the body of the reducer, TypeScript knows that Action is possibly any of those actions. In order to figure out which type of action it is, we use a type guard in the form of a switch statement. Inside of each of the case we have 100% certainty about all the different properties of the Action object.

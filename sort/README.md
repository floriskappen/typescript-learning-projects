# Bubble Sort with Node.js & TypeScript
This is part of a series of small projects I did in an effort to learn TypeScript design patterns. The goal of this projects is to take different data structures (array of numbers, string and kind of a linked list), and sort them from least to greatest. For example, an array and a linked list should be sorted with the lowest numbers in the front, and the highest numbers in the back. A string should be shorted by lowercase character order. This will be achieved using the simple Bubble Sort algorithm.

This may seem like a kind of silly project, but the goal here was to learn how I can effectively use interfaces and classes together in TypeScript.

## Installation

Use the package manager [npm](https://nodejs.org/en/)  to install Bubble Sort with Node.js & TypeScript.

```bash
npm install
```

## Project Breakdown

Each of the three data type files(LinkedLists.ts, NumbersCollection.ts and CharactersCollection.ts) inherit from Sorter. They first prepare their data type in order for it to be sortable, after which the sort() method can be called as seen in *index.ts*.

**Sorter.ts**
This is the base class, it has abstract compare and swap methods, an abstract variable length and a public sorting method. When these abstract methods are inherited and used, they need to fulfill the rules specified in this file.
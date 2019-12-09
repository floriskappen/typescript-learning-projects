# CsvFileReader with Node.js & Typescript
This is part of a series of small projects I did in an effort to learn TypeScript design patterns. CsvFileReader.ts is entirely reusable, while other files like the ones that are specified below were made specifically to make use of the provided *football.csv* file.

## Installation

Use the package manager [npm](https://nodejs.org/en/)  to install CsvFileReader.

```bash
npm install
```

## What is happening in index.ts
In *index.ts*, the file 'football.csv' is being read by MatchReader. Summary generates an HTML report containing the amount of wins the user specified team has, and writes it in a file with a user specified filename.

## Project Breakdown

**MatchResult.ts**
Enum usage. Specifically made for included csv file.

**MatchData.ts**
Tuple usage. Specifically made for included csv file.

**inheritance/**
Solution to the problem using inheritance. Made use of a generic that specifies the data type. For example, the previously mentioned *MatchData.ts* is used.

**MatchReader.ts**
The job of this file is to load up some data and converts it to the previously mentioned *MatchData.ts* tuple. 

**Summary.ts**
A big example of composition, which is a better solution to the problem than the files in the previously mentioned *inheritance/* directory.
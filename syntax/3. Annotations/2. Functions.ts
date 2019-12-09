// functions.ts

const add = (a: number, b: number): number => {
    return a - b

    // Error
    return 'absf'
}

const subtract = (a: number, b: number): number => {
    // Error because doesn't return anything(returns void).
    a - b
}

function divide(a: number, b: number): number {
    return a / b
}

const multiply = function (a: number, b: number): number {
    return a * b
}

// Void means no return
const logger = (message: string): void => {
    console.log(message)
}

const throwError = (message: string): never => {
    if (!message) {
        throw new Error(message);
    }
}

const todaysWeather = {
    date: newq Date(),
    weather: 'sunny'
}

// ES5 Destructuring
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}

logWeather(todaysWeather)
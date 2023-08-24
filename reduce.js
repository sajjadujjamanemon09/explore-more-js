const numbers = [1, 2, 3, 4, 5, 6]
const total = numbers.reduce((previous, current) => previous + current, 0)
console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0)
console.log(sum);
const numbers = [12, 10, 5, 9]

const doubled = numbers.map(num => num * 2)
// console.log(doubled);
const fiveBonus = numbers.map(num => num + 5)
// console.log(fiveBonus);
const halves = numbers.map(num => num / 2)
// console.log(halves);
const friends = ['tom', 'jon', 'michel', 'oliver']
const lengths = friends.map(frnd => frnd.length)
// console.log(lengths);
const firstLetter = friends.map( friend => friend[0])
console.log(firstLetter);
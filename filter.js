// filter selected elements based on a condition and returns an array with the elements that fulfilled the condition
const numbers = [1, 2, 3, 4, 5, 6]
const players = [61, 52, 73,64, 75, 66]

// const selected = players.filter(p => p > 70)
// const selected = players.filter(p => p > 80)
// const selected = players.filter(p => p > 50)
const selected = players.filter(p => p % 2 === 1)

console.log(selected);


const friends = ['tom', 'jon', 'michel', 'oliver']
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends);
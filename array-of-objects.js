const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 35000},
    {id: 4, name: 'mac', price: 265000}
]

// map
const names = products.map(product => product.name)
const prices = products.map(p => p.price)
console.log(names, prices);


// for each
products.forEach(p => console.log(p.id))


// filter
const expensive = products.filter(p => p.price > 40000)
console.log(expensive);


// find
const affordable = products.find(p => p.price < 50000)
console.log(affordable);


// reduce
const total = products.reduce ((acum, current) => acum + current.price, 0)
console.log(total);
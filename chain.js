// data access
const data = [{id: 1, name: 'abul', address: 'kochu khet'}]
console.log(data[0].address);

// first products
const products = {
    count : 5000,
    data : [
        {id: 1, name : 'lenovo', price: 65000},
        {id: 2, name : 'macbook', price: 165000},
    ]
}
console.log(products.data[0].price);

const user = {
    id: 50001,
    name : 'Raj Bro',
    address : {
        street : {
            first : '54 road , dhaka',
            second : 'poribag',
            third : 'no doraii'
        },
        city : 'Dhaka'
    }
}
console.log(user.address.street.second);

const user2 = {
    id: 50001,
    name : 'Pori monir',
    address : {
        city : 'Dhaka',
        country : 'Bangladesh'
        },
}

console.log(user.address.street?.second);
console.log(user2.address.street?.second);
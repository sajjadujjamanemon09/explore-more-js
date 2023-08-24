const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 35000},
    {id: 4, name: 'mac', price: 265000}
]

// has some properties, method
class Product {
    country = 'Bangladesh'
    constructor(name){
        this.name = name
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('Le Le Lenovo')
// console.log(lenovo);
// lenovo.speak('oba kita kou')



class Teacher{
    constructor(name, subject){
        this.name = name
        this.subject = subject
    }


    lecture(){
        console.log('Sir is teaching Math');
    }
}

const toponSir = new Teacher('Tapan Sir', 'Physics')
// console.log(toponSir);

const rashidSir = new Teacher('Rashid Sir', 'English')
console.log(rashidSir);
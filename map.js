// map -- > loop through each elements of the array and do the operation that you passed in the call back function and hold the result form each operation in an array and finally returns you the array

const numbers = [4, 5, 6, 7];

function doubleIt(num) {
  // console.log('num now', num);
  return num * 2;
}

const double2 = n => n * 2;

const output = numbers.map(double2);
console.log(output);

const output2 = numbers.map(n => n * 2)

// const double = []
// for(const num of numbers){
//     const double = num * 2
//     double.push(double)
// }

// console.log(doubled);

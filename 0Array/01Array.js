//01) Create, access, update
// Array is mutable(can change)
// 1) Create an array 

let name = ['prince', 'sharma', 23,323]
// console.log(name);
 // Using Array Constructor 

 let array = new Array(10, 20, 30, 40)
 
 // Access  
 // console.log(array[1]);
 
 // console.log(array[2]);
 
//   console.log(array);
let arrPush = array.push(50)
// console.log(array);
// console.log(`Push(50): return length of array: ${arrPush}`);
let arrUnshift = array.unshift(5)
// console.log(array);
// console.log(`Unshift(5): return length of array: ${arrUnshift}`);

let arrpop = array.pop()
// console.log(array);
// console.log(`pop(): deleted element at end: ${arrpop}`);
let arrshift = array.shift()
// console.log(array);
// console.log(`shift(): deleted element at first: ${arrPush}`);

// console.log(fruits[fruits.length - 1]); // mango

// Update 

let newArray = [12, 14, 16, 18 ,20]

 // map do not change in original array it only returns a new arrray
let updateArray = newArray.map((num) => {
    return   num-2
});

console.log(updateArray)
console.log(newArray);

// forEach used when u wnat to update or change in original array
newArray.forEach((num, index, arr)=>{
    arr[index] = num -2
    
})
console.log(newArray);


let arr = [1, 2, 3, 4, 5]
arr.shift()
// console.log(arr);

arr.unshift(0, 1)
// console.log(arr);

arr.push(6)
// console.log(arr);
arr.pop()
// console.log(arr);
 
// console.log(arr.length-1);
// console.log(arr.entries());

// arr.includes(0,1)
// console.log(arr);

///////////////////Slice and Splice////////////////////////
console.log(`Original Array: ${arr}`);

let slice = arr.slice(1,4)// Copy 
console.log(`Slice = arr.slice(1,4): ${slice}`);
console.log(`Original Array: ${arr}`);;

let splice = arr.splice(1, 4)// change in original 
console.log(`Splice = arr.splice(1, 4): ${splice}`);
console.log(`Original Array: ${arr}`);






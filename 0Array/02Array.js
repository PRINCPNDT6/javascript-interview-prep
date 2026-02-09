// short and reverse

let arr = [8,4,3]
arr.sort() // ye hr value ko string bna deta hai or wapas number bnake array me
// "3"< "4"< "8"
// console.log(arr);
// let arr1 = [30, 10, 5, 4]
// "10" < "30" < "4" < "5"
// like "1" < "3" < "4" < "5"

// reverce 
let sortArray = [2,4,2,7,4,1]
sortArray.sort((a, b) => a-b ) 
// Agr result negative to a phle 
// result zero same jgah
// result positive swap
// repeate jb tk sort na ho 

// like 2-4 => -2 , no swap
// 4-2 => 2, positive SWAP , b pahle 
// 4-7 => -3, no swap
// 7-4 => 3 , swap , b pahle 
// is 7-1 => 6, b phle abhi 1 swap hota hua sbse aage jayga 

// console.log(sortArray);

// descending order 
// sortArray.sort((a, b) => b-a)

// reverse + sorting 
let revSort = [2,1,4,3,6,5]
// revSort.sort().reverse();
revSort.sort((a, b) => a-b).reverse();
console.log(revSort);

// same as revsort use descending order 
revSort.sort((a, b) => b-a)
console.log(revSort);


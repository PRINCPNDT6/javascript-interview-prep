let arr = [1, 23, 45, 0, 4, 0, 43]

// let sortArray = arr.sort((a, b) => b-a) 
// console.log(sortArray);

// console.log(this);


let pos = 0

for(let num of arr){
    if(num !== 0){ // target ekement 
        [arr[pos], num] = [num, arr[pos]]
        pos++// jb ye arr ke 0 element me loop nahi jata to pos increment nahi hota 
        // or next element ko usi position pr rkhta hai jis se zero end me jata hai 
    }
}

// for(let i = 0; i < arr.length; i++ ){
//     if(arr[i] !== 0){
//         [arr[pos], arr[i]] = [arr[i], arr[pos]]
//         pos++
//     }
// }

// console.log(arr);



let negArray = [1, -3, 2, -2, 0, 3]
// Moves Negative Value at the End of this array
// use for loop for swap

let position = 0
for(let num of negArray){
    if(num >= 0){
        [negArray[position], num] = [num, negArray[position]]
        position++ // yaha pos = 1 to next target elemt 2 to ye 2 ko 1 position 
        // pr rkhega to -3 ko 2 pos pr , next time ye -3 ko chhod dega or 0 ko target krega or use 
        // uske lie pos 2  hogi or -3 fir position 3 pr 
    }
}

// console.log(negArray);
 

// negArray.forEach((num)=> {
//     if(num >= 0){
//         [negArray[position], num] = [num, negArray[position]]
//         position++
        
//     }
// })

// console.log(negArray);


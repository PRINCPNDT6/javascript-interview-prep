// reverse Array
let arr = [4, 5, 3, 5, 1]


let revArr = []
for(let i = arr.length-1; i >= 0; i--){
    revArr.push(arr[i])
}
// console.log(revArr);


let result = arr.reduce((acc, num) =>{
      acc.unshift(num)//[], phle 4 [4] fir 4 se phle unshift(5) [5, 4] fir unshift(3) [3, 5, 4] fir unshift(5) [5, 3, 5, 4] fir unshift(1) [1, 5, 3, 5, 4] 

      return acc
    },[])
// console.log(result);

// let reversed = arr.reduce((a, c) => [c, ...a], []);
// 
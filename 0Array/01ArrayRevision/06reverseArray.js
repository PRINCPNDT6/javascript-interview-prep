const empId = [10, 11, 12, 13, 14, 15]

//...Spread//////////////////
let revEmpId = empId.reduce((acc, num) =>{
    return   [num, ...acc]
}, [])
// console.log(revEmpId);

revEmpId = empId.reduce((acc, num) => {
    acc.unshift(num)
    return acc;
}, [])
// console.log(revEmpId);


const cart = [
  { id: 1, name: "Shoes", price: 2000, qty: 1 },
  { id: 2, name: "T-Shirt", price: 800, qty: 2 },
  { id: 3, name: "Cap", price: 300, qty: 1 }
];

let cartItem = cart.forEach((item) => {
    //   item.price
    // console.log(item.price*item.qty);
    
})
// cart()
// console.log(cartItem);

let arr = [1, 2,3 ,4,5]
let sumArr = arr.reduce((sum, num) => sum + num, 0)
console.log(sumArr);


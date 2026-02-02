let arr = [2,4,3,2,5,6,4,3,6,7,5,4,3]
let obj = {}
let unique = []

 
for (let i = 0; i < arr.length; i++){
    let value = arr[i] // value ke andr sare element 
    // if obj ke andar vo element nahi hai to obj me key and value store hogi
    if(!obj[value]){ // ye 0 se check krega ki 2 obj ki key hai ya nahhi fir 4 or 3 and fir 2 and 5 , iskke ander 2 , 4 , 3  jayega fir 2 nahi jayega fir 5 jayega, ye duplicate ko andar nahi jane deta
        obj[value] = true // yahan obj me key add hoti hai jo unique hoti hai
        unique.push(value) // vo key mtlb ki sirf vo value jo if ke andr aay hai ve unique arr me push hogi
    }
}
// console.log(obj);
// console.log(unique);

// console.log(unique.sort());
// console.log(obj.Obects(key));

let ArrOne = [1,1,1,2,2,3,4,2,3]

let setArr = [...new Set(ArrOne)]
// console.log(setArr);
// console.log(ArrOne);

let empNameStr  = "Find Unique Value Value"
let arrempName = empNameStr.split(" ")
let arremp = []
let objempName = {}

for(let empName of arrempName){
    // objempName[empName] isme only unique name aayenge cause of obj id
    //so iski obj ke help se unique name 
    if(!objempName[empName]){
        objempName[empName] = true
        arremp.push(empName)
    }
}
// console.log(arremp);

//....................
let arrNum = [1,2,1,34,46,67,4,3,4,5,6,5,4,2,3,4,6,8,6,5,3,4,5,6,34,5,6,5,4,5]

let unqArr = []
let numObj = {}

for(let num of arrNum){
    if(!numObj[num]){
        numObj[num] = true
        unqArr.push(num)
    }
}
console.log(numObj);

console.log(unqArr);

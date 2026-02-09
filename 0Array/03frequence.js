const arr = ["a", "c", "b", "c", "a", "r", "r", "c"]
const freq = {}
for(let num of arr){
    freq[num] = (freq[num] || 0) +1; // object me keys add krke 
    // freq[a] = (freq[undefined] || 0)+1; agr key phle se nahi hai to value undefined
    // freq[a] = (freq[1] || 0)+1; agr  key phle se hai to value 1 hoti hai 
   
}

// console.log(freq);


let str = "this code code is too complex"

let arrStr = str.split(" ") // word basis pr 
// str.split(" ") se arrstr me new array bn gya 
//like ->  let arrStr = ["this", "code", "code", "is", "too", "complex"]
let anoFreq = {}

for(let chr of arrStr){
    anoFreq[chr]  =  (anoFreq[chr] || 0)+1
}

// console.log(anoFreq);

// let obj = {}
// let uniqueArr = []
// for(let i of arr){
    // if(!obj[arr[i]]){
    //     obj[arr[i]] = "value"
    //     uniqueArr.push(arr[i])
    // }
// }



let empId = [1,2,3,4,5,2,3,6,7,1,4]

empFreq = {}

for(let id of empId){
    empFreq[id] = (empFreq[id] || 0) +1
    }
    // console.log(empFreq);
    
//..................
    let strName = "prince sharma prince sharma"
    let arrName = strName.split("")

    namefreq = {}

    for(let letter of arrName){
        namefreq[letter] = (namefreq[letter] || 0)+1;

    }
    // console.log(namefreq);


    //.........................
    let arrNum = [1,2,3,4,1,2,5,6,,45,7,5,4,5,,54,6,54, " ","prince"]// isme undefined bhi 2 baar hai
    numfreq = {}

    for(let num of arrNum){
        numfreq[num] = (numfreq[num] || 0)+1
        
    }
    console.log(numfreq);
    
    
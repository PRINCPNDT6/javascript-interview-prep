let str = 'hello world'
let strArray = str.split("")

let freqObj = {}

for(let i of strArray){
    freqObj[i] = (freqObj[i] || 0)+1;
    // console.log(freqObj[i]);
    

}

console.log(freqObj);

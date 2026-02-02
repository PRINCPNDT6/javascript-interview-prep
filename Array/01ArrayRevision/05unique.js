let empId = [10, 11, 12, 13, 12, 13, 10, 14, 15, 16]
let uniqueId = []
let duplicateId = []
let empObj = {}
let uniqObj = {}

for(let id of empId){
    if(!uniqObj[id]){
        uniqObj[id] = true
        uniqueId.push(id)

    }

    
}
// console.log(uniqObj); // 

let freqofId = []
for(let id of empId){
    empObj[id] = (empObj[id] || 0)+1
}

freqofId.push(empObj)
console.log(empObj);
console.log(freqofId);




for(let id in empObj){
    if(empObj[id] >= 2){
        duplicateId.push(id)
    }
}

console.log(uniqueId);
console.log(duplicateId);

///////////////duplicate




let empId = [1, 3, 4, 3, 5, 4, 3, 1]
let empObj = {}
let duplicateId = []
for(let id of empId){
    empObj[id] = (empObj[id] || 0) +1
   
}

for(let key in empObj){
    // console.log(key);
    // console.log( Object.values(empObj)); empobj[key] // keys se hi obj in ki value aati hai
    // if(Object.values(empObj) >= 2){ // wrong method
    if( empObj[key] >= 2){
        duplicateId.push(key)
        // console.log(key);
        
    }   
    
}

console.log(duplicateId);

console.log(empObj);


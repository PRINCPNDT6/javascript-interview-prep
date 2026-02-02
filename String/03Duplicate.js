let str = 'find duplicate in in this string string'
// let strArray = str.split('');
let strArray = str.split(' ');
let duplicateStr = ''
// let remvDuplicate = ''
let empObj = {}
for(let word of strArray){
    empObj[word] = (empObj[word] || 0)+1;
    // if(!empObj[word]){
    //     empObj[word] = true
    //     remvDuplicate += word + " ";
    //     // console.log(word);
        
    // }
}

for(let key in empObj){
    if(empObj[key] >= 2){
        duplicateStr += key + " "
    }

    
}

console.log(str);
console.log(empObj);
console.log(duplicateStr);
// console.log(remvDuplicate);

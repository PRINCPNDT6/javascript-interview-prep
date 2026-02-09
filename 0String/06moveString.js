let nameArr = ["princ", "nikshu", "sam", "ysh"]

let pos = 0
for(let i = 0; i < nameArr.length; i++ ){
     if(!(nameArr[i].length >= 6)){
        [nameArr[pos], nameArr[i]]  = [nameArr[i], nameArr[pos]]
        pos++; // if condition true , pos increase by 1
    }
    
}

console.log(nameArr);

let result = nameArr.sort((a, b) => a.length - b.length);
console.log(result);

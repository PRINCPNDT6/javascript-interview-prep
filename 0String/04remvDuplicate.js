let  str = 'remove duplicate value value in this string string'

let empObj = {}
let uniqStr = ''
let strAray = str.split(' ')
for(let word of strAray ){
    if(!empObj[word]){
        empObj[word] = true
        uniqStr += word + ' ';

    }
}

console.log(uniqStr);

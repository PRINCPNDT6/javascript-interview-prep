// https://youtube.com/shorts/hEvO9BG6nEg?si=T8MpMhbxWsMyNiLt

 
// Method 1: Built in
let myName = 'Madam'
let result = myName.split('').reverse().join('').toLowerCase();
// console.log(myName);
// console.log(result === myName.toLowerCase());


 // Method 2: user Define
let strr = 'wmnmw'
let strarrr = strr.split('')
let rev = ''
for(let i = strarrr.length-1; i >= 0; i--){
    rev += strarrr[i]
}

// console.log(strr === rev);


let str = 'naman lol'
let strArr = str.split(' ')
// console.log(strArr);

let palindromStr = strArr.filter((name) =>
     name === name.split('').reverse().join(""))
console.log(palindromStr === str);
// console.log(palindromStr.join(' ') === str);

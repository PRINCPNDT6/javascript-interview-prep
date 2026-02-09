let str = 'i am prince sharma'
let strArr = str.split(" ")
let Cstr = ''
for(let word of strArr){
   // Cstr +=  word.toUpperCase() + ' ';
   // Cstr +=  word[0].toUpperCase() + ' ';
   Cstr +=  word[0].toUpperCase() + word.slice(1) + " ";
}
// console.log(strArr);

// console.log(Cstr);

let mixed ='HeLLo WoRlD';
let Resut = mixed.split(" ").map((word) => word.toUpperCase()).join(' ');
let result = mixed.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
console.log(Resut);
console.log(result);

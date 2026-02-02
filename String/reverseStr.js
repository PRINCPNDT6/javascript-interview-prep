// let str = 'this is a reverse function'

// Method 1: reverse();
// let Strarr = str.split("").reverse().join(" ")
// console.log(Strarr);

// Method 2:Loop
// let Strarr = str.split(" ")
// let revstr = ""
// for(let i = Strarr.length-1; i >= 0; i--){
    // console.log(Strarr[i]);
    // revstr += Strarr[i] + " "

// }
// console.log(revstr);
// console.log(Strarr);



// Method 3: Function
// let Str = 'this is a reverse Method'
// let StrAr = Str.split(" ")
// let sstr = 'this is a reverse Function'
// let strAr = sstr.split(" ")


// let reverseFncs = (stringss) =>{
//     let strRev = ''
//       for(let i = stringss.length-1; i >=0 ;i--){
//        strRev += stringss[i] + " ";
//     }
//     return strRev// .....
//     // console.log(strRev);//-----
    
//   }

// console.log(reverseFncs(strAr));// .....
// console.log(reverseFncs(StrAr));// .....
// reverseFncs(strAr)//-----


// Method 4: reduce

let sentence = "this is a reduce Method"

// let revSentencs = sentence.split(" ").reduce((acc, char) => char + acc)
let revSentencs = sentence.split("").reduce((acc, char) =>{return char + " " + acc}, "")
console.log(revSentencs);
// console.log(typeof revSentencs);

// const rev = arr => arr.reduce((a,v)=>[v,...a],[])
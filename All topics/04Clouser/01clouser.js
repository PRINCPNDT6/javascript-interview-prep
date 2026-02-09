const makeFun = () =>{
    let empName = 'Prince Sharma';
    function displayName(){
        console.log(empName);
     }
     // displayName();
     /* OR */

     return displayName;// execution context ke sath lexical scope bhi jata hai islie empName error nahi deta
     /* OR */

//   ṛeturn  function displayName(){
//         console.log(empName);
//     }

}

// console.log(makeFun());
let myFun = makeFun();
// myFun()

let globalVar = 0;
function One(){
    let one = 1;
    console.log(globalVar);
    
    return function Two(){
        
        let two = 2;
        console.log('one from One() to Two()', one);
        return function Three(){
          
            let three = 3;
            console.log('two from Two() to Three()', two);
            return function Four(){
              
                let four = 4;
                console.log('three from Three() to Four()', three);
                console.log('one from One() to Four()', one);
            }
            // Four()
        }
        // Three()
    }
    // Two()

    return function TwoB(){
        console.log('one from One() to TwoB', one);
    }
}

// One()()()()// ye one two three or four ko execute krega
let InfiniteFncs = One()()()// ye one two three ki return value dega 
InfiniteFncs();

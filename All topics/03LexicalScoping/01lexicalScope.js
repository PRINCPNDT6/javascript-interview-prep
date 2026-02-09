// parent() -> child() access
// but child() -> parent() not acess 

function init(){
    let name = 'prince';

        function displayName(){
            console.log('name from init',name);
         }
         displayName();
}

function outer(){
    let userName = 'prince';
    function inner(){
        console.log('userName From outer to inner:',userName);
        let lastName = 'Sharma';
    }
    inner()
    // console.log('lastName from inner to outer:', lastName);
        
}
 outer();
 init();
//  console.log(a);
//  let a; 
 

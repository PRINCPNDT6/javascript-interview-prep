let empName = ["prince", "nikhil", "naman", "ram", "prince", "nikhil"]
let empObj = {}

for(let name of empName){
    // yaha empObj[prince] ki value 1 leni hai jis se next time prince aane pr value 2 ho jay 
    empObj[name] = (empObj[name] || 0)  +1 // phli barr agr empObj[name] isme name nahi hua to key value 0 lega or +1 to each name have 1, or next bar same name aate hi us name ki value 2
    // empObj[prince] = (empObj[undefined] || 0)  +1 // phli barr agr empObj[name] isme name nahi hua to key value 0 lega or +1 to each name have 1, or next bar same name aate hi us name ki value 2
    //   prince to abhi prince : 1 
    // empObj[prince] = (empObj[1] || 0)  +1 // ab dusri baar aaya to  empObj[name] isme name ki value 1 thi  or + 1 hua to prince:2
    //ab prince : 2
    // empObj[prince] = (empObj[2] || 0)  +1 //
    // ab next prince : 3
}
// console.log(empObj);

 for(let key in empObj){
    // console.log(key);
    //  console.log(empObj[key]); // for in loop object ki  key pr loop krta hai, is lie value ke lie obj[key]
    // to isme 2, 2, 1, 1 
    //  console.log(empObj[values]);// ye value define nahi krta  to obj[key] se define krta hai
     
    // console.log(Object.values(empObj)); // compare with values 
    
     //yaha obj ki value check krni hai to for in loop me 
     // obj[key] se value nikalte hai
    //  empObj[key] = empObj[value] like this
     if(empObj[key] >= 2){ // jo values 2 ya se bdi hogi unki keys print hogy 
        console.log(key,empObj[key]);

    }

 }




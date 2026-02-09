// Map Filter or Reduce

// Array  

let empSalary = [12034, 12343, 13343, 14343, 13445]

//Map
 let dblSalary = empSalary.map((salary) => salary*2)
//  console.log(dblSalary);

//Filter
let Two = empSalary.filter((salary) => salary%2 == 0)
let  five = empSalary.filter((salary) => salary%5 == 0)
Two.push(five)
//  console.log(Two.flat());

 //Reduce

//  empSalary.reduce((acc, salary) =>{
//         salary
//  })


let nameArr = ["Staish", "Sachin", "Sagar", "Harsh"]
  let  empNAME = []
    nameArr.forEach((name) =>{
       empNAME.push(name.toLocaleUpperCase())
    })

    // console.log(empNAME);

//Object
let   obj = {
    name: ["prince", "nikhil", "Ram"],
    salary: [23233, 34343, 43433, 23232]
}
      
    let Name =  obj.name.map((name) =>name.toUpperCase())
    //  console.log(Name[0]);
    //  console.log(obj.name[0]);
    let Salary = obj.salary.map((salary) =>salary*2)

     let Obj = {
        name:Name,
        salary:Salary
     }
    //  console.log(Obj);

   let uprName =   obj.name.forEach((name) => {
        return name.toUpperCase()
    })
    // console.log(uprName);// undefined
    
    //  console.log(obj.name);
     
    //  console.log(obj);
     
     
     

 


 

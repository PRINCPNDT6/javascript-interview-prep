// Max , Min

let arr = [2, 34, 23, 5, 7, 34]
    let Max = -Infinity;
    for(let num of arr){
        if(num > Max){
            Max = num
        }      
    }
    // console.log(Max);

    let Min = Infinity
     for(let num of arr){
        if(num < Min){
          Min = num
        }
    }

    // console.log(Min);


// Second Max, Second Min

let SecondMax = -Infinity
for(let num of arr){
    if(num > Max){
       SecondMax = Max
       Max = num
    }else if( num > SecondMax && num < Max){
        SecondMax = num
    }
}

console.log(SecondMax,Max);

let secondMin = Infinity
for(let num of arr){
    if(num < Min){
        secondMin = Min;
        Min = num;
    } else if(num < secondMin && num > Min){
        secondMin = num
    }
}

console.log(secondMin, Min);



    
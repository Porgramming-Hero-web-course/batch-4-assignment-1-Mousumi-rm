{
//
/*
## Problem 1:

Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

```tsx
// Sample Input:
sumArray([1, 2, 3, 4, 5]);
let sumArray:number [] =[1, 2, 3, 4, 5];
let 

// Sample Output:
15;
```

*/ 
// solution-1
function sumArray (add:number[]):number {
    let sum = 0;
    for(let  i = 0; i<add.length; i++){
        sum += add[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5]))

// solution-2
/*
this is  different from first solution i using {.reduce()}
 methods it uses js and also ts.its a build-in array methods
 i think one is easies way to me.  
*/ 

const sumWithInitial = 0;
function sumArray2 (sum: number[]):number{
    return sum.reduce((accumulator,currentValue) =>
     accumulator + currentValue,sumWithInitial);
}
console.log(sumArray2([1,2,3,4,5,6]))

//  
}
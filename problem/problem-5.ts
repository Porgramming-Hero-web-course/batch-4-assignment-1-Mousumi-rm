{
//
/*
## Problem 5:

Write a generic function getProperty that takes an object and
 a property name as arguments and returns the property value. 
 Add a constraint to ensure the property name exists on the object.

> Hints: Use keyof

```tsx
// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:
Alice;
```
*/ 

// solution:

type Person ={
    name:string;
    age:number;
}

const getProperty = <X,Y extends keyof X> (object:X, key:Y) =>{
  return object[key];
}

const person:Person ={
    name:"Alice",
    age:30
}

console.log(console.log(getProperty(person, "name")));



// 
}
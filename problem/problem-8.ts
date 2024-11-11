{
//
/*
## Problem 8:

Create a function validateKeys<T>(obj: T, keys: (keyof T)[]) that takes
 an object obj and an array of keys keys. The function should return 
 true if all of the specified keys exist in the object; otherwise, it should return false.

```tsx
// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));

// Sample Output:
true;
```
*/

// Solution:

function validateKeys<T>(obj: T, keys: ( keyof T)[]): boolean {
    // const allKeys= keys.length;
   return keys.every(key => key in obj);
    
}

const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));



// 
}
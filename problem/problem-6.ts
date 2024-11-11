{
//
/*
## Problem 6:

Define an interface Profile with properties name, age, and email.
 Create a function updateProfile that accepts an object of
  type Profile and an object of type Partial<Profile> representing the updates. 
  The function should return the updated profile.

```tsx
// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
{
  name: "Alice",
  age: 26,
  email: "alice@example.com"
}
```
*/ 
// solution:



interface Profile {
    name:string;
    age:number;
    email:string;
}

function updateProfile(profile : Profile, updates:Partial<Profile>):Profile{
    return {...profile , ...updates};
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));


// 
}
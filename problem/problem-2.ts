{
// 
/*
## Problem 2:

Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

```tsx
// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
[1, 2, 3, 4, 5]

```
*/
//  solution:

function removeDuplicates(add:number[]):number[]{
    const check:{[key:number]:boolean} = {}; //check-object will not not allow to duplicate the key.
    const newArray:number[] = [];
    for(const num of add){
        if(!check[num]){
            check[num] = true;
            // push the unique elements into the new array.
            newArray.push(num);
        }
    }
    return newArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))


























// 
} 
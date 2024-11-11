{
//
/*
## Problem 3:

Create a TypeScript function called `countWordOccurrences` that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

Example:
- Input: `"I love typescript"`, `"typescript"`
- Output: `1`

```tsx
// Sample Input:
countWordOccurrences("I love typescript", "typescript");

// Sample Output:
1;
*/ 
// solution:

function countWordOccurrences(sentence:string, word: string) :number{

    //convert both toLowerCase to ignore the case.

    const toLowerCaseSentence = sentence.toLowerCase();

    const toLowerCadeWord  = word. toLowerCase();

    // split the sentence into words and then count the occurrences of the given word.

    const wordsSplit = toLowerCaseSentence.split(' ');
    // Filter the words that match the given word
    const match = wordsSplit.filter(w =>w === toLowerCadeWord).length;
      // Return the number of matched words
    return match;
}

const sentence1 = "I love typescript";
const words = "typescript";
console.log(countWordOccurrences("I love typescript", "typescript"));
























// 
}
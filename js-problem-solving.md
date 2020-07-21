# JS Problem Solving
Practice pair programming for each problem. Switch roles every 10 mins.
Be sure to `console.log` to make sure that you got a working solution.
Ask yourself the following questions with each problem:
- [ ] Do I understand what the prompt is asking?
- [ ] Am I able to break the problem down?
- [ ] What is my strategy for solving the problem?
- [ ] Do I understand what my code is doing?
- [ ] Am I able to foresee any edge cases?
- [ ] Am I able to track the order of the code that is being executed?
- [ ] Am I able to track the values of the variables?
- [ ] Am I able to walk through my code line by line with an example?
- [ ] Do I have a working solution?
### isInside
```js
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// isInside(['pete', 'adam', 'taylor'], 'fred'); // => false

const names = ['Adam', 'David', 'Alpha'];
const person = 'Adam';
const per = 'Brian';


//inside () parameters go inside
const isInside = (array, ele) => {
    
    //if() & else statement can be used?
    for (let i = 0; i < array.length; i++){
        //if the element is inside the array return true
        if(array[i] === ele) {
            console.log('true');
            return true;
        } else {
            //if not return false 
            console.log('false');
            return false;
        }
    }

}
 
//isInside(names, per);

isInside(names, person);

```
### reverseStr
```js
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('General Assembly'); //=> 'ylbmessA lareneG'

const personal = "Alpha";
const reverse = (str) => {
    // write function that takes a string as a parameter
    let result = "";
    for (i = (str.length - 1); i >= 0; i--) {
        result += str[i];
    }
    console.log(result);
}
// reverses characters in reverse (string form)

reverse(personal);

```
### luckySevens
```js
// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

const luckySevens = (max) => {
    let result = [];
    //us a for loop 
    for (let i=1; i<max; i++){
        //use a mod (%) 
        if (i % 7 == 0){
           result.push(i);
        }
    }//all back your result
    return result;
}

console.log(luckySevens(42));
```
### copyMachine
```js
// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

const copyMachine = (element, num) => {
    //set empty array
    let result = [];
    //for loop
    for(let i = 0; i < num; i++){
        result.push(element);
    }
    return result;
}
//console.log or callback function

console.log(copyMachine('Mingo', 3));
```
### everyOtherWord
```js
// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]


const everyOtherWord = (sentence) => {
    //set an empty 
    let result = [];
    let finalResult = []
    //split ?
        result = sentence.split(" ");
    //return every other word
    for ( let i = 0; i < result.length; i++){
        if (i % 2 == 0){
            finalResult.push(result[i]);
        }
    }
    //return results
    return finalResult;
}

console.log(everyOtherWord('hello how are you doing on this lovely day?'));
```
### wordYeller
```js
// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// let sent = "Stop it now! Please, wont you stop?";
// let yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// let words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true


function wordYeller(sentence) {
    //need to split sentence
    let splitSentence = sentence.split(" ")
    //set new array var.
    let newLoudSentenceArray = []
    //now create new function to read through
    splitSentence.forEach(function(word) {
        let lengthOfWord = word.length - 1    
        let lastCharInWord = word[lengthOfWord]  
        //create if else statement to read through each word
        if (lastCharInWord === "!" || 
            lastCharInWord === "," || 
            lastCharInWord === "." || 
            lastCharInWord === "?") {
            newLoudSentenceArray.push(word) 
        } else {
            let loudWord = word + "!"
            //if it doesn't have then add !
            newLoudSentenceArray.push(loudWord) 
        }
    })
    let newLoundSentence = newLoudSentenceArray.join(" ")
    return newLoundSentence;
}

console.log(wordYeller('hey how are you doing today?'))
```
### arraySubstring
```js
// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]

const arraySubstring = (words, str) => {
    //make new array variable
    let array = [];
    //need to go through each word to check for the ele
    words.forEach(element => {
        let array2 = element.includes(str)
        //push back to your array
        array.push(array2)
    })
    //return your array here
    return array;

}

console.log(arraySubstring(['anna', 'Hello', 'With'], 'an'));

```
#### evenCaps
```js
// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"

const evenCaps = (sentence) => {
   //set new variable for new way of it coming out
    let otherWord = [];
    //split your sentence
    let newSentence = sentence.split("");

    for(let i=0; i<newSentence.length; i++){
        if (i % 2 !== 0){
            otherWord.push(newSentence[i].toUpperCase())
        } else {
            otherWord.push(newSentence[i])
        }

    }
    //your return results here
    return otherWord.join("");
}

console.log(evenCaps('Hey there!'));

```
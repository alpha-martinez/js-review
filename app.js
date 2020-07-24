let name = 'Alpha Martinez';
let age = 32;
let isCool = true;
const friends = ['Giselle', 'Gilbert', 'Jorge', 'Danny', 'Domingo'];

const newPlace = {
    industry: 'Boston',
    yearFounded: 1630,
    foundingMember: 'John Winthrop',
    whereLocation: 'up',
    touristAttraction: {
        museum: 'Isabella Stewart Gardener Museum',
        parks: 'Boston Common',
    },
    print: function(){
        console.log('The founder of Boston is ' + this.foundingMember);
    }
}

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(newPlace);
console.log(newPlace.touristAttraction.museum);

newPlace.print();

// function printFunction(array){
//     array.forEach(friend => {
//         console.log(friend);
//     })
// }

// printFunction(friends);
// printFunction(newPlace.foundingMembers);


//standard function
function addNumber(num1, num2){
    return num1 +  num2
}


//arrow function
const subtractNumbers = (num1, num2) => {
    return num1 - num2
}

//DOM

const container = document.querySelector('.container');
console.log(container);

//create an element
const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My first JS Review';
console.log(headerTwo);

container.appendChild(headerTwo);

//add a class to headerTwo
headerTwo.classList.add('subtitle');
//headerTwo.setAttribute('class', 'header-two');

headerTwo.classList.remove('header-two');
console.log(headerTwo);

headerTwo.addEventListener('click', function() {
    headerTwo.textContent = 'Hi';
 });

 //make another element 

 const headerThree = document.createElement('h2');
 headerThree.textContent = 'Friends';

 container.appendChild(headerThree);

 console.log(headerThree);

 // iterate through my friends array 
 // reference each friend
 // create a list
const list = document.createElement('ul');

 for (let i = 0; i < friends.length; i++){
     let eachFriend = friends[i];
     console.log(eachFriend);

     const listItem = document.createElement('li');
     listItem.textContent = eachFriend;

     list.appendChild(listItem);
 }

 console.log(list);

 headerThree.addEventListener('click', function (){
     container.appendChild(list);
 })

 //problem solving 



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


// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('General Assembly'); //=> 'ylbmessA lareneG'


// define variables
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

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

//create a const to call a variable




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

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]




//name function 
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
    let newArraySentence = newLoudSentenceArray.join(" ")
    return newArraySentence;
}

console.log(wordYeller('hey how are you doing today?'))


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




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



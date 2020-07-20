# JavaScript Review
This is my review of JavaScript.

## Examples of Data Types
```javascript 
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

const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My first JS Review';



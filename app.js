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
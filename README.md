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
```

### More DOM Manipulation

```javascript

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
 });

 ```

 #### HTML Review

 ```html 
<!-- by creating a div with class name (such as .container) will make it easier to grab anything within this group/container in your HTML using javascript. -->
<div class="container"></div>
<!-- when inputting your links or scripts in your html, you would end up using link to connecnt the CSS page and source to connect your javascript page -->
<link href="sylesheet" href="style.css">
<script type="text/javascript" src="js/app.js"></script>
```

##### CSS Review
Recently found out that by applying * in your CSS, you are setting a global rule to your page. It overrides the rest of your page's style depending on what you input in this area. So, for mine below, I added a margin and padding of 0 so it won't change as I styled everything else.

```CSS
* {
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
}


```

###### JavaScript Review

In this portion of Javascript, we learned about fetch

```javascript

fetch('https://api.github.com/users/alpha-martinez')
.then (response => {
    return response.json();
 })
.then(data =>{
    //console.log(data);
    let githubURL = data.url;
   // console.log(githubUrl);
   let githubUsername = data.login;
   let githubName = data.name;

   let alpha = new GithubProfile(githubUsername, githubName, githubURL);
   alpha.intro();
})

```
Also learned about constructor functions: setting a class and the first letter in your function must be capitalized

```javascript
function Person(first, last, age, gender) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
    this.intro = function() {
        console.log("Hi, my name is " + this.firstName);
    }
}

let anna = new Person('Anna', 'Martinez', 20, 'Female');
let alpha = new Person('Alpha', 'Martinez', 20, 'Female');
console.log(anna);
anna.intro(); //invoke

alpha.intro();


```



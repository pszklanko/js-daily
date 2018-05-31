// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100 100
let age = 200;
console.log(age, age2); // 200 100
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
// You might think we can just do something like this:
team[3] = 'abc';
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const captain = person;
captain.age = 55;

// how do we take a copy instead?
const cap2 = Object.assign({}, person , {number: 99})

// We will hopefully soon see the object ...spread
const cap3 = {...person}

// cheat
const dev2 = JSON.parse(JSON.stringify(person)); //deep copy if object in object
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

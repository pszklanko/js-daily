const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

const p = document.querySelector('p');
p.addEventListener('click', makeGreen);

// Regular
console.log('aaa');

// Interpolated
console.log('Hello  %s string', 'asasa');

// Styled
console.log('%c I am text', 'font-size: 50px');

// warning!
console.warn('ACHTUNG!');

// Error :|
console.error('ERRRROR');

// Info
console.info('Info');

// Testing
console.assert(1 !== 1, 'That is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`); //groupCollapsed
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
})
// counting
console.count('test');
console.count('test');
console.count('test');
console.count('test');

// timing
console.time('fetching data');
/// things to do
console.timeEnd('fetching data');

// table
console.table(dogs);
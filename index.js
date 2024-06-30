// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats, 'Broom'];
}

function prependCat(name) {
    return ['Arnold', ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}

beforeEach(function() {
    cats = ['Milo', 'Otis', 'Garfield'];
});


cats = appendCat('Simba');
console.log(cats);

cats = prependCat('Nala');
console.log(cats);

cats = removeLastCat();
console.log(cats);

cats = removeFirstCat();
console.log(cats);

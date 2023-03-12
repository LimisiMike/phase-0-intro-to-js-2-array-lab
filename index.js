// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];
// Let's add a reset
beforeEach(function() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});


function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat(Ralph) {
    cats.pop("Ralph");
    return cats;
}
  
function destructivelyRemoveFirstCat(Bob) {
    cats.shift("Bob");
    return cats;
}

function appendCat(Broom) {
    const name = [...cats, "Broom"];
    return name;
}

function prependCat(Arnold) {
    const name = ["Arnold", ...cats];
    return name;
}

function removeLastCat() {
    const Garfield = cats.slice(0, cats.length - 1);
    return Garfield;
}

function removeFirstCat() {
    const Milo = cats.slice(1);
    return Milo;
}
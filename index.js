// 1:
// Closure is a function that references a variable in outer scope from its inner scope.

// 2:
function personalDice(name) {
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");

dansRoll();
dansRoll();
zoesRoll();
zoesRoll();
// a: In my opinion closure used in line number 8 with Variable newRoll.

// b:

// c:

// -------------------------------------------------

function createBase(x) {
  function add(y) {
    return x + y;
  }
  return add;
}

const addSix = createBase(6);

console.log(addSix(10));
console.log(addSix(21));

//function initial concepts
function testCall (){
    helloWorld()
}
//function name(parameters): return {}
function helloWorld(){
    console.log("Hello, World!");
}

const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

function myFunc(obj) {
    obj.make = "Toyota";
}
console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"

//Scope Chain Example:
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }

    return square(a) + square(b);
}

console.log(addSquares(2, 3));


//function Expression - Square anonymous, but you can provide a name that refers to itself (aka. sq)
//You use it more when you pass as arg to another function.
const square = function sq(randomNumber) {
    return randomNumber * randomNumber;
}

console.log(square(5));

//Passing anonymous to another 1 func
function map(f, a) {
    const result = new Array(a.length);

    for (let i = 0; i < a.length; i++) {
        //aplica a função f a cada elemento
        result[i] = f(a[i]);
    }
    return result;
}

const numbers = [0, 1, 2, 5, 10];
//cubed numbers is a function that pass in array all long, doing x3 in numbers, its called from MAP, so, you can pass anything.
//---------------------------------F VALUES HERE --------------------A VALUES HERE--
const cubedNumbers = map(function (x) {return x * x * x;}, numbers);

console.log(cubedNumbers); // [0, 1, 8, 125, 1000]



//Function Scopes
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
    return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
    const num1 = 2;
    const num2 = 3;

    //This function is defined inside the getScore function, so it is only visible within the getScore function
    function add() {
        //Literal templates, you can use ${} to include variables in a string
        return `${name} scored ${num1 + num2}`;
    }

    return add();
    //${name}: Insere o valor da variável name na string de nome add.
    // ${num1 + num2}: Calcula a soma de num1 e num2 e insere o resultado na string de nome add.
    // Isso permite criar strings dinâmicas de forma mais legível e concisa.
    // ele vai considera o nun do SCOPE, e não do global, reescreveu.
}

console.log(getScore()); // "Chamakh scored 5"


//Arguments object
//The arguments object is an Array-like object corresponding to the arguments passed to a function.
function myConcat(separator) {
    let result = ""; // initialize list
    // iterate through arguments
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}

console.log(myConcat(", ", "red", "orange", "blue"));
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));

//Function Parameters. You can pass any number of parameters to a function.


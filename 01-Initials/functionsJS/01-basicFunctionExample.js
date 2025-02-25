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


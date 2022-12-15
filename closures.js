// all fuctions hace access to global variables.
//brief intro.
let count = 0;

function myNumbers() {
    count += 1
    return count;
}
console.log(myNumbers())
console.log(myNumbers())
    // this returns 2, but anything above line 3 can affect the value of count
    //which will affect our program. we want the value of count to remain.

//THis introduces nested functions and scoping.

const newNumbers = (function() {
        let count = 0;
        const addNumber = function() {
            return count += 1
        }
        return addNumber();
    })
    // console.log(newNumbers());
    // console.log(newNumbers());
    // console.log(newNumbers());

//JavaScript function-level scope from our canvas content
function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function(name, lang = "Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
}
outer("hey")("name", "JavaScript") //invokes the outer function and inner function repectively.


//JavaScript closures and self invoking functions
const newNumbers1 = (function() {
    let count = 0;
    //the newNumbers1 variable is assigned an annonymous  function which is also  self-invoking as a return value
    //making newNumbers1 a function and can acess the count from the parent
    return function() { count += 1; return count }
})(); //the last parenthesis updates the ne newNumber1 function with zero.

// console.log(newNumbers1());
// console.log(newNumbers1());
// console.log(newNumbers1());

//Finally JavaScript Closure in this case happens when newNumbers1 acesses the count in the parent scope


function newNumbers() {
    let count = 0;

    function countIncrement() {
        return count++;

    }
    return countIncrement()
}
console.log(newNumbers());
console.log(newNumbers());
// ## Create function following below :</br>
// add(a, b)</br>
// subtract(a, b)</br>
// multiply(a, b)</br>
// divide(a, b)</br>

const add = (a, b) =>{
    console.log(a+b);
    return(a+b);
}

const subtract = (a, b) =>{
    console.log(a-b);
    return(a-b);
}

const multiply = (a, b) =>{
    console.log(a*b);
    return(a*b);
}

const divide = (a, b) =>{
    console.log(a/b);
    return(a/b);
}

add(6, 5)
console.log(add);

subtract(6, 5)
console.log(subtract);

multiply(6, 5)
console.log(multiply);

divide(6, 5)
console.log(divide);


// ## -----another exercise Create Function Inform---</br>
// console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);

function myInfo(firstName, location, hobby){
console.log("Hi, my name is " + firstName + " I live in " + location + " and enjoy "+ hobby);
}

myInfo('Kong', 'The north', 'coding')
//variables

//var variable - global scope
if (true) {
    var MyName = "Regel";
}

console.log(MyName);

//let variable - block scope
let age = 18;
console.log(age)

if (true) {
    let animal = "Cat";
    console.log(animal);
}

//console.log(animal); - this will not work outside the scope where it was declared

//const variable - fixed or cannot be changed
const birthdate = "10-16-1989";
console.log(birthdate);
//birthdate = "00-00-0000";


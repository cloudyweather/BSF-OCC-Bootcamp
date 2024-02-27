function checkEvenOrOdd(num){
    if (num%2 === 0){
        return "Even";

    }
    else {

        return "Odd";
    }
}

let num1 =1;
let num2 = 2;

console.log("The num1 is ", checkEvenOrOdd(num1));
console.log("The num2 is ", checkEvenOrOdd(num2));
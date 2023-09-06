//calculator
let option;

while(option != 5){ let option = Number(prompt(`
Enter which operation you wish:
1- sum
2- subtraction
3- multiplication
4- division
5- cancel

`))
if(option === 5){
    alert("you closed and aplication! Se you soon!  ")
    break;
}

if (option === 1){

    let number1 = Number(prompt("Enter the first number for sum: "))
    let number2 = Number(prompt("Enter the second number for sum: "))

    let total =    Number(number1 + number2) 

    alert(total)

} else if (option === 2){

    let number1 = Number(prompt("Enter the first number for subtraction: "))
    let number2 = Number(prompt("Enter the second number for subtraction: "))

    let total =    Number(number1 - number2) 

    alert(total)
} else if (option === 3){

    let number1 = Number(prompt("Enter the first number for multiplication: "))
    let number2 = Number(prompt("Enter the second number for multiplication: "))

    let total =    Number(number1 * number2) 

    alert(total)

} else if(option === 4){
    let number1 = Number(prompt("Enter the first number for division: "))
    let number2 = Number(prompt("Enter the second number for division: "))

    let total =    Number(number1 / number2) 

    alert(total)
} else {
    alert("Option invalid!")
}


}


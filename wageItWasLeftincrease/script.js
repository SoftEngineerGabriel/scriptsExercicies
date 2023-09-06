let wage = Number(prompt("Enter your wage: "))
let percentage = Number(prompt("Enter the porcentage of increase: "))

let wageIncrease = Number(wage + (wage * percentage/100))

alert(`The your wage of $ ${wage} after increase it was left $ ${wageIncrease}` )
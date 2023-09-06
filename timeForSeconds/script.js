let day = Number(prompt("Enter amount of day:"))
let hours = Number(prompt("Enter amount of hours: "))
let minute = Number(prompt("Enter amount of minute:"))
let seconds = Number(prompt("Enter amount of seconds: "))

let daySeconds = Number(day * 86400)
let hoursSeconds = Number((hours * 60)*60)
let minutesSconds = Number(minute * 60)

let sunSeconds = Number(daySeconds + hoursSeconds + minutesSconds + seconds)

alert(sunSeconds)
let raceNumber = Math.floor(Math.random()*1000);

let earlyOrNot = true;

let runnerAge = 22;


if (runnerAge >= 18 && earlyOrNot) {
	raceNumber += 1000
} else {
	raceNumber
}

if (runnerAge >= 18 && earlyOrNot) {
	console.log(raceNumber + ' :Race time: 9:30 am')
else if (runnerAge >= 18 && !earlyOrNot) {
	console.log(raceNumber + ' :Race time: 11:00 am')
else if (runnerAge <18) {
	console.log(raceNumber + ' :Race time: 12:30 pm')
} else {
	console.log(raceNumber + ' :Please see the registration desk')
}
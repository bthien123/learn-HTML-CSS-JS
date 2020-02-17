let userName = '';

userName ? welcomeString = "Hello, " + userName : "Hello!";

let userQuestion = "Who is president of US?";

console.log(userName, userQuestion);

let randomNumer = Math.floor(Math.random()*8);

let eightBall = ''

switch (randomNumer) {
	case 0:
		eightBall = 'It is certain';
		break;
	case 1:
		eightBall = 'It is decidedly so';
		break;
	case 2:
		eightBall = 'Reply hazy try again';
		break;
	case 3:
		eightBall = 'Cannot predict now';
		break;
	case 4:
		eightBall = 'Do not count on it';
		break;
	case 5:
		eightBall = 'My sources say no';
		break;
	case 6:
		eightBall = 'Outlook not so good';
		break;
	case 7:
		eightBall = 'Signs point to yes';
		break;
	default:
		// statements_def
		break;
}

console.log(eightBall);
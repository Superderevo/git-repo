var n = prompt("Введите n","");
function factiorial(n) {
	num = n;
for (var i=n; i!=1; i--){
 num *=(i-1)
}
return num;
}
alert(factiorial(n));


var questions = [{
question: "Who is the president of Russia?",
choices: ["Putin", "Medvedev", "Obama", "Vodka"],
corAnswer: 0,
usersAnswer: null
}, {
question: "What city is the capital of Russia?",
choices: ["Grozny", "Moscow", "Khimki", "Volgograd"],
corAnswer: 1,
userAnswer: null
}];
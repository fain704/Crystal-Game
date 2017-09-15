$(document).ready(function() {

var targetNumber;
var crystal1Val;
var crystal2Val;
var crystal3Val;
var crystal4Val;
var userNumber;
var wins = 0;
var losses = 0;

function gameStart() {
 targetNumber = Math.floor(Math.random()*100)+30;
 crystal1Val = Math.floor(Math.random()*20);
 crystal2Val = Math.floor(Math.random()*20);
 crystal3Val = Math.floor(Math.random()*20);
 crystal4Val = Math.floor(Math.random()*20);
 userNumber = 0;
 $(".targetNumber").text(targetNumber);
 $(".userNumber").text(userNumber);
 $(".wins").text("Wins: " + wins);
 $(".losses").text("Losses: " + losses);
}

gameStart();



console.log("targetNumber" + targetNumber);
console.log("crystal1Val" + crystal1Val);
console.log("crystal2Val" + crystal2Val);
console.log("crystal3Val" + crystal3Val);
console.log("crystal4Val" + crystal4Val);
console.log("userNumber" + userNumber);

$(".crystal1").on("click", function(){
	console.log("you just clicked crystal 1");
	userNumber = userNumber + crystal1Val;
	console.log(userNumber);
	$(".userNumber").text(userNumber);
	if (userNumber === targetNumber){
		alert("you win!!!!");
		wins++;
		gameStart();
	}

	if (userNumber > targetNumber){
		alert("you lose!!!");
		losses++;
		gameStart();
	}
});

$(".crystal2").on("click", function(){
	console.log("you just clicked crystal 2");
	userNumber = userNumber + crystal2Val;
	console.log(userNumber);
	$(".userNumber").text(userNumber);
	if (userNumber === targetNumber){
		alert("you win!!!!");
		wins++;
		gameStart();
	}

	if (userNumber > targetNumber){
		alert("you lose!!!");
		losses++;
		gameStart();
	}	
});

$(".crystal3").on("click", function(){
	console.log("you just clicked crystal 3");
	userNumber = userNumber + crystal3Val;
	console.log(userNumber);
	$(".userNumber").text(userNumber);
	if (userNumber === targetNumber){
		alert("you win!!!!");
		wins++;
		gameStart();
	}

	if (userNumber > targetNumber){
		alert("you lose!!!")
		losses++
		gameStart();
	}	
});

$(".crystal4").on("click", function(){
	console.log("you just clicked crystal 4");
	userNumber = userNumber + crystal4Val;
	console.log(userNumber);
	$(".userNumber").text(userNumber);
	if (userNumber === targetNumber){
		alert("you win!!!!");
		wins++;
		gameStart();
	}

	if (userNumber > targetNumber){
		alert("you lose!!!");
		losses++;
		gameStart();
	}
});


// if (userNumber === targetNumber){
// 	alert("you win!!!!");
// 	gameStart();
// }

// if (userNumber > targetNumber){
// 	alert("you lose!!!")
// 	gameStart();
// }


});
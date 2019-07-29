
let hands = document.getElementsByClassName("hand")
function setHandVisibility(){
	for(i=0; i<hands.length; i++) {
		hands[i].style.visibility = "hidden";
	}
}

let chosenNumber;
function displayChoice(chosenNumber) {
	document.querySelector("#choice").innerHTML = chosenNumber;
}

choose0.addEventListener("click", function(){
	chosenNumber=0;
	return displayChoice(0);
});

choose1.addEventListener("click", function(){
	chosenNumber=1;
	return displayChoice(1);
});

choose2.addEventListener("click", function(){
	chosenNumber=2;
	return displayChoice(2);
});

choose3.addEventListener("click", function(){
	chosenNumber=3;
	return displayChoice(3);
});

choose4.addEventListener("click", function(){
	chosenNumber=4;
	return displayChoice(4);
});

choose5.addEventListener("click", function(){
	chosenNumber=5;
	return displayChoice(5);
});

let random;
let randomNumber;

let mytotalScore = 0;
function addScore(myScore) {
	mytotalScore += myScore;
	document.querySelector("#myScore").innerHTML = mytotalScore;
}

let comtotalScore = 0;
function addComScore(comScore) {
	comtotalScore += comScore;
	document.querySelector("#comScore").innerHTML = comtotalScore;
}

function checkWinner() {
	random=Math.random()*5;
	randomNumber=Math.round(random);
	
	for(i=0; i<hands.length; i++) {
		if(randomNumber == i) {
			hands[i].style.visibility = "visible";
			document.querySelector("#opponentsChoice").innerHTML = randomNumber;
		} 
	}		
}
handCover.addEventListener("click", function(){

	if(chosenNumber == undefined) {
		alert("You have not yet chosen a number");
	} else if(randomNumber == chosenNumber) {
		checkWinner();
		document.getElementById("handCover").style.visibility = "hidden";
		document.getElementById("status").style.color ="red";
		document.getElementById("status").innerHTML = "You Lose";
		return addComScore(1);

	} else {
		checkWinner();
		document.getElementById("handCover").style.visibility = "hidden";	
		document.getElementById("status").style.color ="blue";
		document.getElementById("status").innerHTML = "You Win";

		return addScore(1);
	}
});

playAgain.addEventListener("click", function(){
	setHandVisibility();
	chosenNumber=undefined;
	document.querySelector("#choice").innerHTML = "";
	document.querySelector("#opponentsChoice").innerHTML = "";
	document.getElementById("status").innerHTML = "";
	handCover.style.visibility = "visible";
});



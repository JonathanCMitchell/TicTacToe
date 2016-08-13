prompt("Hit the start button first or it wont work")
var app = {}
app.storage = []
app.players = {
	'O': "O",
	'X': "X"
}
var headPointer = app.players['X']
var moves = 0
var drawCount = 0;
var winnerCount = 0;
var loserCount = 0;

$(document).ready(()=> {
var row1 = []
var row2 = []
var row3 = []

function toggleHeadPointer() {
	if (headPointer === app.players['O']) {
		headPointer = app.players['X']
	}  else if (headPointer === app.players['X']) {
		headPointer = app.players['O']
	}
	var $current_player = $("<p></p>")
	$current_player.text(headPointer)
	$current_player.addClass("play")
	$("#player").html($current_player)
	return headPointer;
}

//TEXT CHANGE CLICKERS

$("#1").on("click",function(event) {
	event.preventDefault();
	if ($(this).text() === "") {
		$(this).text(headPointer)
		row1[0] = $(this).text();
		toggleHeadPointer()
	}
	moves++
	app.storage[0] = row1
	checkIfWinnerAndAppendToDom()
	console.log('row1: ',row1)
	console.log('storage: ',app.storage)
})


$("#2").on("click",function(event) {
	event.preventDefault();
	if ($(this).text() === "") {
		$(this).text(headPointer)
		row1[1] = $(this).text();
		toggleHeadPointer()
	}
	moves++
	app.storage[0] = row1
	checkIfWinnerAndAppendToDom()
	console.log('row1: ',row1)
	console.log('storage: ',app.storage)
})

$("#3").on("click",function(event) {
	event.preventDefault();
	if ($(this).text() === "") {
		$(this).text(headPointer)
		row1[2] = $(this).text();
		toggleHeadPointer()
	}
	moves++
	app.storage[0] = row1
	checkIfWinnerAndAppendToDom()
	console.log('row1: ',row1)
	console.log('storage: ',app.storage)
})


$("#4").on("click",function(event) {
	event.preventDefault();
	if ($(this).text() === "") {
		$(this).text(headPointer)
		row2[0] = $(this).text();
		toggleHeadPointer()
	}
	moves++
	app.storage[1] = row2
	checkIfWinnerAndAppendToDom()
	console.log('row1: ',row2)
	console.log('storage: ',app.storage)
})

$("#5").on("click",function(event) {
	event.preventDefault();
	if ($(this).text() === "") {
		$(this).text(headPointer)
		row2[1] = $(this).text();
		toggleHeadPointer()
	}
	moves++
	app.storage[1] = row2
	checkIfWinnerAndAppendToDom()
	console.log('row2: ',row2)
	console.log('storage: ',app.storage)
})

$("#6").on("click",function(event) {
	event.preventDefault();
	if ($(this).text() === "") {
		$(this).text(headPointer)
		row2[2] = $(this).text();
		toggleHeadPointer()
	}
	moves++
	app.storage[1] = row2
	checkIfWinnerAndAppendToDom()
	console.log('row2: ',row2)
	console.log('storage: ',app.storage)
})

$("#7").on("click",function(event) {
	event.preventDefault();
	if ($(this).text() === "") {
		$(this).text(headPointer)
		row3[0] = $(this).text();
		toggleHeadPointer()
	}
	moves++
	app.storage[2] = row3
	checkIfWinnerAndAppendToDom()
	console.log('row2: ',row3)
	console.log('storage: ',app.storage)
})

$("#8").on("click",function(event) {
	event.preventDefault();
	if ($(this).text() === "") {
		$(this).text(headPointer)
		row3[1] = $(this).text();
		toggleHeadPointer()
	}
	moves++
	app.storage[2] = row3
	checkIfWinnerAndAppendToDom()
	console.log('row2: ',row3)
	console.log('storage: ',app.storage)
})

$("#9").on("click",function(event) {
	event.preventDefault();
	if ($(this).text() === "") {
		$(this).text(headPointer)
		row3[2] = $(this).text();
		toggleHeadPointer()
	}
	moves++
	console.log("9 clicked moves is",moves)
	app.storage[2] = row3
	checkIfWinnerAndAppendToDom()
	console.log('row2: ',row3)
	console.log('storage: ',app.storage)
})


// function checkIfWinnerAndAppendToDom(){
// 	if (app.hasWinner()) {
// 		winnerCount++
// 		var $winner = $("<p></p>")
// 		console.log("winnercout",winnerCount)
// 		$winner.text(parseInt(winnerCount))
// 		if (headPointer === app.players['X']) {
// 			$("#win11").append($winner)
// 		}  else if (headPointer === app.players['O']) {
// 			$("#win22").append($winner)
// 		}
// 		winnerCount=0;
// 	}
// }


// function checkIfWinnerAndAppendToDom(){
// 	if (app.hasWinner()) {
//
// 		var $winner = $("<p></p>")
// 		console.log("winnercout",winnerCount)
// 		$winner.text(parseInt(winnerCount))
// 		if (headPointer === app.players['X']) {
// 			$("#win11").append($winner)
// 		}  else if (headPointer === app.players['O']) {
// 			$("#win22").append($winner)
// 		}
// 		winnerCount=0;
// 	}
// }

function incrementCounter() {
	var counter = 0;
		return function() {
			counter++
			return counter
		}
	}

var playerOneCounter = incrementCounter()
var playerTwoCounter = incrementCounter()

function checkIfWinnerAndAppendToDom(){
if (app.hasWinner()) {
	var $winner = $("<p></p>")
	if (headPointer === app.players['X']) {
		$winner.text(parseInt(playerOneCounter()))
		$("#win11").prepend($winner)
	}  else if (headPointer === app.players['O']) {
		$winner.text(parseInt(playerTwoCounter()))
		$("#win22").prepend($winner)
	}
}
}






$("button").on("click", ()=> {
	console.log("reset")
	app.storage[0] = []
	app.storage[1] = []
	app.storage[2] = []
	$("table td").text("")
})


})

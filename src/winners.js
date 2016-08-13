
console.log('app is: ',app)
console.log('app storage is',app.storage)

//HELPER FUNCTIONS
app.hasRowWinnerAt = function(row) {
	var obj = _.countBy(row, _.identity)
	if (((obj['X']) === 3) || (obj['O']) === 3) {
		console.log("row is :",row)
		return true;
	}  else {
		return false
	}
}

app.hasRowWinner = function() {
	console.log('app storage', app.storage)
	for (var i = 0 ; i < 3; i++) {
		if (app.hasRowWinnerAt(app.storage[i])){
			//change class to winner display
			return true;
		} 
	}
	return false;
}

app.hasColWinnerAt =  function(colIndex) {
	var count = 0;
	for (var i = 0; i < 3; i++) {
		if (!app.storage[i]) {return false}
			if (app.storage[i].length !== 3) { return false }
				if ((app.storage[i][colIndex] === "X") || (app.storage[i][colIndex] === "O")){
					count++
				}
			}
			if (count === 3) {
				return true;
			}  else {
				return false; 
			}
		}

		app.hasColWinner = function() {
			for (var j = 0; j < 3; j++) {
				if (app.hasColWinnerAt(j)) {
					return true
				}
			}
			return false
		}

app.hasMajorDiagonalConflictAt = function() {
	var countO = 0;
	var countX = 0;
	var i = 0
	for (var i = 0; i < 3; i++) {
		if (app.storage[i][i] === undefined) {return false}
			if (app.storage[i][i] === "X") {
				countX++
			}  else if (app.storage[i][i] === "O") {
				countO++
			}
		}
		if ((countO === 3) || (countX === 3)) {
			return true
		}
		return false
	}

	app.hasMinorDiagonalConflictAt = function() {
		var countO = 0;
		var countX = 0;
		for (var i = 2; i >= 0; i--) {
			if (app.storage[i][2-i] === "X") {
				countX++
			}  else if (app.storage[i][2-i] === "O") {
				countO++
			}
		}
		if ((countX === 3) || (countO === 3)) {
			return true
		}
		return false
	}

	app.hasWinner = function() {
		if ((app.hasRowWinner()) || (app.hasColWinner()) || (app.hasMajorDiagonalConflictAt()) || (app.hasMinorDiagonalConflictAt())) {
			return true
		}
		return false;
	}







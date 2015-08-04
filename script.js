document.addEventListener('DOMContentLoaded', function() {
	var canvas = document.getElementById("canvas");
	var turnPar = document.getElementById("turn");
	var switchButton = document.getElementById("switch");
	var ctx = canvas.getContext("2d"); 
	var user1 = true;
	var comp = false;
	var width = canvas.width;
	var height = canvas.height;
	var thirdWidth = width / 3;
	var thirdWidth2 = thirdWidth * 2;
	var thirdHeight = height / 3;
	var thirdHeight2 = thirdHeight * 2;
	canvas.addEventListener("mousedown", userDraw, false);
	
	// Switch Button
	switchButton.onclick = function() {
		user1 = !user1;
		comp = !comp;
		userDraw();
		compDraw();
	};


	// Creating Tic Tac Toe Lines on Canvas

	ctx.strokeStyle = "rgba(31, 178, 226, 1)"; // Turquoisey color
	for (i=1; i<=2; i++) {
		ctx.beginPath();
		ctx.moveTo(i * thirdWidth, 0);
		ctx.lineTo(i* thirdWidth, height);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(0, i * thirdHeight);
		ctx.lineTo(width, i * thirdHeight);
		ctx.stroke();
		ctx.closePath();
	};

	// Drawing X's when someone clicks on a cell

	function userDraw(event) {
	  var x = event.x;
	  var y = event.y;

	  x -= canvas.offsetLeft;
	  y -= canvas.offsetTop;
	  console.log("x: " + x + "  y: " + y);

	  if ((x < thirdWidth && x > 0) && (y < thirdHeight && y > 0)) {
	  	if ((user1) && (comp === false)) {
	  		//Cell One X
				//Draw X. Line 1.
				ctx.beginPath();
				ctx.moveTo(10, 10);
				ctx.lineTo(thirdWidth - 10, thirdHeight - 10);
				ctx.stroke();
				ctx.closePath();
				// Draw X. Line 2.
				ctx.beginPath();
				ctx.moveTo(thirdWidth - 10, 10);
				ctx.lineTo(10, thirdHeight - 10);
				ctx.stroke();
				ctx.closePath();
			}	else {
				console.log("ERROR: userDraw cellOne");
			};
	  } else if ((x < thirdWidth2 && x > thirdWidth) && (y < thirdHeight && y > 0)) {
	  	if ((user1) && (comp === false)) {
	  		//Cell Two X
				//Draw X. Line 1.
				ctx.beginPath();
				ctx.moveTo(thirdWidth + 10, 10);
				ctx.lineTo((thirdWidth2) - 10, thirdHeight - 10);
				ctx.stroke();
				ctx.closePath();
				//Draw X. Line 2.
				ctx.beginPath();
				ctx.moveTo((thirdWidth2) - 10, 10);
				ctx.lineTo(thirdWidth + 10, thirdHeight - 10);
				ctx.stroke();
				ctx.closePath();
			} else {
				console.log("ERROR: userDraw cellTwo");
			};
	  } else if ((x < width && x > thirdWidth2) && (y < thirdHeight && y > 0)) {
	  		if ((user1) && (comp === false)) {
	  		//Cell Three X
				//Draw X. Line 1.
				ctx.beginPath();
				ctx.moveTo((thirdWidth2) + 10, 10);
				ctx.lineTo(width - 10, thirdHeight - 10);
				ctx.stroke();
				ctx.closePath();
				//Draw X. Line 2.
				ctx.beginPath();
				ctx.moveTo(width - 10, 10);
				ctx.lineTo((thirdWidth2) + 10, thirdHeight - 10);
				ctx.stroke();
				ctx.closePath();
			} else {
				console.log("ERROR: userDraw cellThree");
			}
	  } else if ((x < thirdWidth && x > 0) && (y < thirdHeight2 && y > thirdHeight)) {
	  	if ((user1) && (comp === false)) {
				//Cell Four X		
				//Draw X. Line 1.
				ctx.beginPath();
				ctx.moveTo(10, thirdHeight + 10);
				ctx.lineTo(thirdWidth - 10, (thirdHeight2) - 10);
				ctx.stroke();
				ctx.closePath();
				// Draw X. Line 2.
				ctx.beginPath();
				ctx.moveTo(thirdWidth - 10, thirdHeight + 10);
				ctx.lineTo(10, (thirdHeight2) - 10);
				ctx.stroke();
				ctx.closePath();
			} else {
				console.log("ERROR: userDraw cellFour");
			};
	  } else if ((x < thirdWidth2 && x > thirdWidth) && (y < thirdHeight2 && y > thirdHeight)) {
	  	if ((user1) && (comp === false)) {
	  		//Cell Five X
				//Draw X. Line 1.
				ctx.beginPath();
				ctx.moveTo(thirdWidth + 10, thirdHeight + 10);
				ctx.lineTo((thirdWidth2) - 10, (thirdHeight2) - 10);
				ctx.stroke();
				ctx.closePath();
				//Draw X. Line 2.
				ctx.beginPath();
				ctx.moveTo((thirdWidth2) - 10, thirdHeight + 10);
				ctx.lineTo(thirdWidth + 10, (thirdHeight2) - 10);
				ctx.stroke();
				ctx.closePath();
			} else {
				console.log("ERROR: userDraw cellFive");
			};
	  } else if ((x < width && x > thirdWidth2) && (y < thirdHeight2 && y > thirdHeight)) {
	  	if ((user1) && (comp === false)) {
				//Cell Six X
				//Draw X. Line 1.
				ctx.beginPath();
				ctx.moveTo((thirdWidth2) + 10, thirdHeight + 10);
				ctx.lineTo(width - 10, (thirdHeight2) - 10);
				ctx.stroke();
				ctx.closePath();
				//Draw X. Line 2.
				ctx.beginPath();
				ctx.moveTo(width - 10, thirdHeight + 10);
				ctx.lineTo((thirdWidth2) + 10, (thirdHeight2) - 10);
				ctx.stroke();
				ctx.closePath();
			} else {
				console.log("ERROR: userDraw cellSix");
			};
	  } else if ((x < thirdWidth && x > 0) && (y < height && y > thirdHeight2)) {
	  	if ((user1) && (comp === false)) {
				//Cell Seven X
				//Draw X. Line 1.
				ctx.beginPath();
				ctx.moveTo(10, (thirdHeight2) + 10);
				ctx.lineTo(thirdWidth - 10, height - 10);
				ctx.stroke();
				ctx.closePath();
				// Draw X. Line 2.
				ctx.beginPath();
				ctx.moveTo(thirdWidth - 10, (thirdHeight2) + 10);
				ctx.lineTo(10, height - 10);
				ctx.stroke();
				ctx.closePath();
			} else {
				console.log("ERROR: userDraw cellSeven");
			};
	  } else if ((x < thirdWidth2 && x > thirdWidth) && (y < height && y > thirdHeight2)) {
	  	if ((user1) && (comp === false)) {
				//Cell Eight X
				//Draw X. Line 1.
				ctx.beginPath();
				ctx.moveTo(thirdWidth + 10, (thirdHeight2) + 10);
				ctx.lineTo((thirdWidth2) - 10, height - 10);
				ctx.stroke();
				ctx.closePath();
				//Draw X. Line 2.
				ctx.beginPath();
				ctx.moveTo((thirdWidth2) - 10, (thirdHeight2) + 10);
				ctx.lineTo(thirdWidth + 10, height - 10);
				ctx.stroke();
				ctx.closePath();
			} else {
				console.log("ERROR: userDraw cellEight");
			};
	  } else if ((x < width && x > thirdWidth2) && (y < height && y > thirdHeight2)) {
	  	if ((user1) && (comp === false)) {
				//Cell Nine X
				//Draw X. Line 1.
				ctx.beginPath();
				ctx.moveTo((thirdWidth2) + 10, (thirdHeight2) + 10);
				ctx.lineTo(width - 10, height - 10);
				ctx.stroke();
				ctx.closePath();
				//Draw X. Line 2.
				ctx.beginPath();
				ctx.moveTo(width - 10, (thirdHeight2) + 10);
				ctx.lineTo((thirdWidth2) + 10, height - 10);
				ctx.stroke();
				ctx.closePath();
			} else {
				console.log("ERROR: userDraw cellNine");
			};
	  } else {
	  	console.log("ERROR: userDraw()");
	  };
	  turnPar.innerHTML = "Their turn!";
	};

	// Computer randomly drawing O's when someone's turn is finished

	function compDraw() {
		var number = Math.floor(Math.random() * 90);
		console.log(number);
		if (number >= 0 && number < 10) {
			if ((user1 === false) && (comp)) {
				//Cell One O
				//Draw Circle
				ctx.beginPath();
				ctx.arc(thirdWidth / 2, thirdHeight / 2, 60, 0, Math.PI * 2, false);
				ctx.closePath();
				ctx.stroke();
			} else {
				console.log("ERROR: compDraw cellOne");
			};
		} else if (number >= 10 && number < 20) {
			if ((user1 === false) && (comp)) {
				//Cell Two O
				//Draw Circle
				ctx.beginPath();
				ctx.arc((3 * thirdWidth) / 2, thirdHeight / 2, 60, 0, Math.PI * 2, false);
				ctx.closePath();
				ctx.stroke();
			} else {
				console.log("ERROR: compDraw cellTwo");
			};
		} else if (number >= 20 && number < 30) {
			if ((user1 === false) && (comp)) {
				//Cell Three O
				//Draw Circle
				ctx.beginPath();
				ctx.arc((5 * thirdWidth) / 2, thirdHeight / 2, 60, 0, Math.PI * 2, false);
				ctx.closePath();
				ctx.stroke();
			} else {
				console.log("ERROR: compDraw cellThree");
			};
		} else if (number >= 30 && number < 40) {
			if ((user1 === false) && (comp)) {
				//Cell Four O
				//Draw Circle
				ctx.beginPath();
				ctx.arc(thirdWidth / 2, height / 2, 60, 0, Math.PI * 2, false);
				ctx.closePath();
				ctx.stroke();
			} else {
				console.log("ERROR: compDraw cellFour");
			};
		} else if (number >= 40 && number < 50) {
			if ((user1 === false) && (comp)) {
				//Cell Five O
				//Draw Circle
				ctx.beginPath();
				ctx.arc((3 * thirdWidth) / 2, height / 2, 60, 0, Math.PI * 2, false);
				ctx.closePath();
				ctx.stroke();
			} else {
				console.log("ERROR: compDraw cellFive");
			};
		} else if (number >= 50 && number < 60) {
			if ((user1 === false) && (comp)) {
				//Cell Six O
				//Draw Circle
				ctx.beginPath();
				ctx.arc((5 * thirdWidth) / 2, height / 2, 60, 0, Math.PI * 2, false);
				ctx.closePath();
				ctx.stroke();
			} else {
				console.log("ERROR: compDraw cellSix");
			};
		} else if (number >= 60 && number < 70) {
			if ((user1 === false) && (comp)) {
				//Cell Seven O
				//Draw Circle
				ctx.beginPath();
				ctx.arc(thirdWidth / 2, (5 * height) / 6, 60, 0, Math.PI * 2, false);
				ctx.closePath();
				ctx.stroke();
			} else {
				console.log("ERROR: compDraw cellSeven");
			};
		} else if (number >= 70 && number < 80) {
			if ((user1 === false) && (comp)) {
				//Cell Eight O
				//Draw Circle
				ctx.beginPath();
				ctx.arc((3 * thirdWidth) / 2, (5 * height) / 6, 60, 0, Math.PI * 2, false);
				ctx.closePath();
				ctx.stroke();
			} else {
				console.log("ERROR: compDraw cellEight");
			};
		} else if (number >= 80 && number <= 90) {
			if ((user1 === false) && (comp)) {
				//Cell Nine O
				//Draw Circle
				ctx.beginPath();
				ctx.arc((5 * thirdWidth) / 2, (5 * height) / 6, 60, 0, Math.PI * 2, false);
				ctx.closePath();
				ctx.stroke();
			} else {
				console.log("ERROR: compDraw cellNine");
			};
		} else {
			console.log("ERROR: compDraw()")
		};
		turnPar.innerHTML = "Your turn!";
	};
});
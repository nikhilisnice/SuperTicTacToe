document.addEventListener('DOMContentLoaded', function() {
	var canvas = document.getElementById("canvas");
	var turnPar = document.getElementById("turn");
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

	function switchGame() {
		user1 = !user1;
		comp = !comp;
	};


	// Drawing Circles
	function drawCircle(x, y) {
		ctx.beginPath();
		ctx.arc((x * thirdWidth) / 2, (y * thirdHeight) / 2, 60, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.stroke();
	};

	// Drawing X's
	function drawX(x1, x2, y1, y2) {
		//Draw X. Line 1.
		ctx.beginPath();
		ctx.moveTo((x1 * thirdWidth) + 10, (y1 * thirdHeight) + 10);
		ctx.lineTo((x2 * thirdWidth) - 10, (y2 * thirdHeight) - 10);
		ctx.stroke();
		ctx.closePath();
		//Draw X. Line 2.
		ctx.beginPath();
		ctx.moveTo((x2 * thirdWidth) - 10, (y1 * thirdHeight) + 10);	
		ctx.lineTo((x1 * thirdWidth) + 10, (y2 * thirdHeight) - 10);
		ctx.stroke();
		ctx.closePath();
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

	  if ((user1) && (comp === false)) {
		  if ((x < thirdWidth && x > 0) && (y < thirdHeight && y > 0)) {
	  		//Cell One X
				drawX(0, 1, 0, 1);
			} else if ((x < thirdWidth2 && x > thirdWidth) && (y < thirdHeight && y > 0)) {
	  		//Cell Two X
				drawX(1, 2, 0, 1);
	  	} else if ((x < width && x > thirdWidth2) && (y < thirdHeight && y > 0)) {
	  		//Cell Three X
				drawX(2, 3, 0, 1);
		  } else if ((x < thirdWidth && x > 0) && (y < thirdHeight2 && y > thirdHeight)) {
				//Cell Four X		
				drawX(0, 1, 1, 2);
		  } else if ((x < thirdWidth2 && x > thirdWidth) && (y < thirdHeight2 && y > thirdHeight)) {
	  		//Cell Five X
				drawX(1, 2, 1, 2);
		  } else if ((x < width && x > thirdWidth2) && (y < thirdHeight2 && y > thirdHeight)) {
				//Cell Six X
				drawX(2, 3, 1, 2);
		  } else if ((x < thirdWidth && x > 0) && (y < height && y > thirdHeight2)) {
				//Cell Seven X
				drawX(0, 1, 2, 3);
		  } else if ((x < thirdWidth2 && x > thirdWidth) && (y < height && y > thirdHeight2)) {
				//Cell Eight X
				drawX(1, 2, 2, 3);
		  } else if ((x < width && x > thirdWidth2) && (y < height && y > thirdHeight2)) {
				//Cell Nine X
				drawX(2, 3, 2, 3);
	  	} else {
	  		console.log("ERROR: userDraw()");
	  	};
	  	switchGame();
			compDraw();
		} else {
			console.log("ERROR: userDraw()");
		};
	};
	// Computer randomly drawing O's when someone's turn is finished

	function compDraw() {
		var number = Math.floor(Math.random() * 90);
		console.log(number);
		if ((user1 === false) && (comp)) {
			if (number >= 0 && number < 10) {
				//Cell One O
				drawCircle(1, 1);
			} else if (number >= 10 && number < 20) {
				//Cell Two O
				drawCircle(3, 1);
			} else if (number >= 20 && number < 30) {
				//Cell Three O
				drawCircle(5, 1);
			} else if (number >= 30 && number < 40) {
				//Cell Four O
				drawCircle(1, 3);
			} else if (number >= 40 && number < 50) {
				//Cell Five O
				drawCircle(3, 3);
			} else if (number >= 50 && number < 60) {
				//Cell Six O
				drawCircle(5, 3);
			} else if (number >= 60 && number < 70) {
				//Cell Seven O
				drawCircle(1, 5);
			} else if (number >= 70 && number < 80) {
				//Cell Eight O
				drawCircle(3, 5);
			} else if (number >= 80 && number <= 90) {
				//Cell Nine O
				drawCircle(5, 5);
			} else {
				console.log("ERROR: compDraw()");
			};
			switchGame();
		} else {
			console.log("ERROR: compDraw()");
		};
	};
});
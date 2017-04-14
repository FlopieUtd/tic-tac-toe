
	// DECLARE THE BOARD

	var board = ["","","","","","","","",""]

	// CREATE A GRID SLOT

	var createGridSlot = function (){
		var gridSlot = document.createElement("div");
		gridSlot.className="grid";
		$(".divcontainer").append(gridSlot);
	}

	// RENDER 9 GRID SLOTS, ASSIGN GRID NUMBER AND ASSIGN E (EMPTY) CLASS

	for (var i = 1; i < board.length + 1; i++) {
		var gridSlot = document.createElement("div");
		gridSlot.className="e grid grid"+i;
		$(".container").append(gridSlot);
	}

	// KEEP TRACK OF TURN, 0 is PLAYER, 1 is COMPUTER

	var turn = 0;

	// PLAYER TURN

	$(".grid").on("click", function (){
		if ( $(this).hasClass("e") ) {
			$(this).removeClass("e");
			$(this).addClass("x");
			$(this).html("x");
			turn += 1;
			checkForOutcome();			
		}
	})
	// COMPUTER TURN

	var computerTurn = function () {
		var numberEmptySlots = $('.e').length;
		var computerOptions = Math.floor(Math.random() * numberEmptySlots);
		var computerChoice = $(".e").eq(computerOptions);
		computerChoice.removeClass("e");
		computerChoice.addClass("o");
		computerChoice.html("o");
		turn -= 1;
		checkForOutcome();
	}

	// CHECK FOR OUTCOME 

	var checkForOutcome = function () {
		if ( 
				($(".grid1").hasClass("x") && $(".grid2").hasClass("x") && $(".grid3").hasClass("x")) ||
				($(".grid4").hasClass("x") && $(".grid5").hasClass("x") && $(".grid6").hasClass("x")) ||
				($(".grid7").hasClass("x") && $(".grid8").hasClass("x") && $(".grid9").hasClass("x")) ||
				($(".grid1").hasClass("x") && $(".grid4").hasClass("x") && $(".grid7").hasClass("x")) ||
				($(".grid2").hasClass("x") && $(".grid5").hasClass("x") && $(".grid8").hasClass("x")) ||
				($(".grid3").hasClass("x") && $(".grid6").hasClass("x") && $(".grid9").hasClass("x")) ||
				($(".grid1").hasClass("x") && $(".grid5").hasClass("x") && $(".grid9").hasClass("x")) ||
				($(".grid3").hasClass("x") && $(".grid5").hasClass("x") && $(".grid7").hasClass("x")) 
			) {
			$(".title").html("you won!");
			$(".e").removeClass("e");
		} else if (
				($(".grid1").hasClass("o") && $(".grid2").hasClass("o") && $(".grid3").hasClass("o")) ||
				($(".grid4").hasClass("o") && $(".grid5").hasClass("o") && $(".grid6").hasClass("o")) ||
				($(".grid7").hasClass("o") && $(".grid8").hasClass("o") && $(".grid9").hasClass("o")) ||
				($(".grid1").hasClass("o") && $(".grid4").hasClass("o") && $(".grid7").hasClass("o")) ||
				($(".grid2").hasClass("o") && $(".grid5").hasClass("o") && $(".grid8").hasClass("o")) ||
				($(".grid3").hasClass("o") && $(".grid6").hasClass("o") && $(".grid9").hasClass("o")) ||
				($(".grid1").hasClass("o") && $(".grid5").hasClass("o") && $(".grid9").hasClass("o")) ||
				($(".grid3").hasClass("o") && $(".grid5").hasClass("o") && $(".grid7").hasClass("o")) 
			) {
			$(".title").html("you lost!");
			$(".e").removeClass("e");
		} else if (
				$('.e').length == 0
			) {
			$(".title").html("it's a draw!");
		}
		if (turn == 1) {
			computerTurn();
		}
	}

	// NEW GAME

	var newGame = function () {
		$(".grid").removeClass("x o");
		$(".grid").addClass("e");
		$(".grid").html("");
		$(".title").html("");
	}
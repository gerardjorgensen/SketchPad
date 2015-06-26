$(document).ready(function(){
	$("body").prepend('<button type="button">New Grid!</button>').append("<div class='container'></div>");

	$('.container').append("<div class='row'></div>")
	.append("<div class='row'></div>")
	.append("<div class='row'></div>")
	.append("<div class='row'></div>")

	$('.row').append("<div class='column'></div>")
	.append("<div class='column'></div>")
	.append("<div class='column'></div>")
	.append("<div class='column'></div>")

	$('.column').hover(function(){
		$(this).css("background-color","black");
	});



	var width;
	var height;

	$("button").click(function(){

		height = prompt("Enter the number of rows in the grid in Integers less than 50");
		while(!$.isNumeric(height) || height > 50){
			height = prompt("Please enter the height in INTEGERS and a number less than 50");
		}

		width = prompt("Enter the the number of columns in the grid in Intgers Grid in Integers less than 50");
		while(!$.isNumeric(width)){
			width = prompt("Please enter the width in INTEGERS and a number less than 50");
		}

		$('.container').remove();

		$("body").append("<div class='container'></div>");

		for(var i=0; i < height; i++){
			$('.container').append("<div class='row'></div>");
		}
		
		for(var j=0; j < width; j++){
			$('.row').append("<div class='column'></div>");
		}

		if(width >= height){
		var box_square = (900 - (6*width))/width; //Finds Size for Square by dividing by width to make sure square's are small enough.
		//6*width is to account for the margin.
		var box_squareString = box_square.toString() + "px";

		$('.column').css("height", box_squareString);

		$('.column').css("width", box_squareString);

		}
		else{
		var box_square = (900 - (6*height))/height;
		var box_squareString = box_square.toString() + "px";

		$('.column').css("height", box_squareString);

		$('.column').css("width", box_squareString);

		}

		$('.column').hover(function(){
			$(this).css("background-color","black");
		});

	});

});

//Global Variables
var clicks = 0;
var fight = 0;
var attack = 0;
var character;
var defender;

//Character Objects
var characterOne = {
	health:100, 
	attack: 10,
	counter: function(){

	}
};
var characterTwo = {
	health:100, 
	attack:10,
	counter: function(){
		
	}
};
var characterThree = {
	health:100, 
	attack:10,
	counter: function(){
		
	}
};

//Prints HP of Charcter to appropriate location
$("#HP1").html("<span> HP: "+ characterOne.health + "</span>")
$("#HP2").html("<span> HP: "+ characterTwo.health + "</span>")
$("#HP3").html("<span> HP: "+ characterThree.health + "</span>")

//Make sure HTML has loaded to page
$(document).ready(function () {
	console.log('Game is ready to begin');
//Player Chooses Character With Click
$('.pick').click(function(event){
	//increment clicks variable
	clicks++; 
	//only allow one charcter to be clicked with if statement
	if(clicks<2) {
	//event function this applies to div clicked, chaining adding class and removing
		$(this).addClass('chosen').appendTo('.characterRow').removeClass('pick');
		//identify character clicked id and storing in character variable
		character = event.target.id;
		console.log(character);
	 }
	//searching within parent element for chosen class if true then
	if ($('.characterRow').has('.chosen')) {
		//adds enemy class to remaining characters and moves to enemy section
		$('.pick').addClass('enemies').appendTo('.enemyRow').removeClass('pick');
		//on click of characters of enemies class add class defender and add to defend section
			$('.enemies').click(function(event){
				//identify defender clicked id and storing in character variable
				defender = event.target.id;
				fight++;
				console.log('fight' + fight);
				console.log(defender);
				$(this).addClass('defender').appendTo('.defenderRow');
			});
		}
});


//event listener to attack id button
	$('#attack').click(function(){
	//need to add if to start counter when ready and tie variables to character object
		attack++;
		console.log('attack ' + attack);
		
	});


	function gameReset(){

	};

	function winner(){

	};

	function loser(){

	};


});


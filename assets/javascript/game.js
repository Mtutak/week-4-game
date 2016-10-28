//DragonBall Musi
var audioElement = $('<audio />');
      audioElement.attr('src', 'assets/audio/audioname.mp3');


//Global Variables
var clicks = 0;
var enemyClick = 0;
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
	// setTimeout(function(){
	// })
	audioElement.animate({volume:  0.4}, 1500);
	$(".themeButton").on("click", function(){
        		audioElement.play();
			});
	$(".pauseButton").on("click", function(){
        		audioElement.pause();
			});

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
		$('#pickHeading').empty();
	 }
	//searching within parent element for chosen class if true then
	if ($('.characterRow').has('.chosen')) {
		//adds enemy class to remaining characters and moves to enemy section
		$('.pick').addClass('enemies').appendTo('.enemyRow').removeClass('pick');
		//on click of characters of enemies class add class defender and add to defend section
			//possible make new variable if enemyclicks < 2 and then reset on every win
			$('.enemies').click(function(event){
				enemyClick++;
					if (enemyClick<2){
					//identify defender clicked id and storing in character variable
						defender = event.target.id;
						console.log('Enemies Chosen' + enemyClick);
						console.log(defender);
						$(this).addClass('defender').appendTo('.defenderRow');
					}
			});
		}
});


//event listener to attack id button
	$('#attack').click(function(){
	//need to tie div variables to character objects
		//prevent attack button from counting until defender has been selected
		if ($('div').hasClass('defender')) {
			attack++;
			console.log('attack ' + attack);
			//Print Game Info, currently using temporary place holders
			$('#gameInfo').prepend("You attacked " + defender+" for " +characterOne.attack+". " + 
			defender +" attacked you back for "+ characterTwo.attack +".")
			}else{
				alert("Pick a Defender!");
			}
	});

	//Attempting to tie event target variable to Object
	function divToObject(){
		if (defender="characterOne"){
			defender = characterOne;
			console.log(characterOne);
		}else if((defender="characterTwo")){}
	}

	function gameReset(){
		$('#pickHeading').prepend('Pick Your Character');
	};

	function winner(){

	};

	function loser(){
		//Temporary place holder until character variable is tied to object
		if(characterTwo.health >= 0){
		alert("You Lost!")
		};
		$('#pickHeading').prepend('Pick Your Character');

	};

	function characterBio(){

	}

	function animateAttack(){
		var basePath = "assets/audio/";
		var soundEffects = ["audio1.mp3"];
		$('#attack').click(function(){
			for(i=0; i<soundEffects.length; i++){
			var a = Math.floor((Math.random()*soundEffects.length));
			new Audio(basePath + soundEffects[a]).play();
			
			};
		});
	};
});


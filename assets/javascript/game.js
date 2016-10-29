//DragonBall Music
// var audioElement = $('<audio />');
//       audioElement.attr('src', 'assets/audio/Dragontheme.mp3');


//Global Variables
var clicks = 0;
var enemyClick = 0;
var attack = 0;
var character;
var defender;
var win = 0;

//Character Objects
var currentTarget = {};
var charTarget = {};

var characterOne = {
	health:100, 
	attack: 10,
	counter: 10
};
var characterTwo = {
	health:100, 
	attack:10,
	counter: 10
};
var characterThree = {
	health:100, 
	attack:10,
	counter: 10
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
	// audioElement.animate({volume:  0.4}, 1500);
	// $(".themeButton").on("click", function(){
 //        		audioElement.play();
	// 		});
	// $(".pauseButton").on("click", function(){
 //        		audioElement.pause();
	// 		});
	// characterBio();
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
		console.log('Character Name: '+ character);
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
						console.log('Number of Enemies Chosen ' + enemyClick);
						console.log('Defender Name: ' + defender);
						$(this).addClass('defender').appendTo('.defenderRow');
					}
					divCharToObject();
					divDefenderToObject();
			});
		}
});


//event listener to attack id button
	$('#attack').click(function(){
	//need to tie div variables to character objects
		//prevent attack button from counting until defender has been selected
		if ($('div').hasClass('defender')) {
			attack++;
			attackToHealth();
			console.log('attack ' + attack);
			//Print Game Info, currently using temporary place holders 
			$('#gameInfo').html("You attacked " + defender +" for " + charTarget.attack+". " + 
			defender +" attacked you back for "+ currentTarget.counter +".")
			}else{
				alert("Pick a Defender!");
			}
		if(currentTarget.health <= 0){
			$('#' + defender).remove();
			win++;
			attack = 0;
			enemyClick = 0;
			}
		if (win === 2){
			winner();
		}

	});

	//Tie event target variable to Object
	function divDefenderToObject() {
		if (defender === "characterOne"){
			currentTarget = characterOne;
		}else if(defender === "characterTwo"){
			currentTarget = characterTwo;
		}else if (defender === "characterThree"){
			currentTarget = characterThree;
		}
		console.log("current target: " + currentTarget.health);
	}

	function divCharToObject(){
		if (character === "characterOne"){
			charTarget = characterOne;
		}else if(character === "characterTwo"){
			charTarget = characterTwo;
		}else if (character === "characterThree"){
			charTarget = characterThree;
		}
		console.log("character: " + charTarget.health);

	}

	function attackToHealth(){
		charTarget.attack = (charTarget.attack * attack);
		currentTarget.health = currentTarget.health - charTarget.attack;
		charTarget.health = charTarget.health - currentTarget.counter;
		$("#" + character).html("<span> HP: "+ charTarget.health + "</span>")
		$("#" + defender).html("<span> HP: "+ currentTarget.health + "</span>")
		
	}

	function gameReset(){
		$('#pickHeading').prepend('Pick Your Character');
		$('#characterOne').removeClass('chosen').appendTo('.main').addClass('pick');
		$('#characterTwo').removeClass('chosen').appendTo('.main').addClass('pick');
		$('#characterThree').removeClass('chosen').appendTo('.main').addClass('pick');
		 clicks = 0;
		 enemyClick = 0;
		 attack = 0;
		 character;
		 defender;
		 win = 0;
	};

	function winner(){
		alert("You Won!");
		gameReset();

	};

	function loser(){
		//Temporary place holder until character variable is tied to object
		if(charTarget.health >= 0){
		alert("You Lost!")
		};
		gameReset();

	};

	// function characterBio(){
	// 	$('.fighter').hover(function(){
	// 		$(this).find('.about').show();
	// 	}, function(){
	// 		$(this).find('.about').hide();
	// 	});
	// }

	// function animateAttack(){
	// 	var basePath = "assets/audio/";
	// 	var soundEffects = ["audio1.mp3"];
	// 	$('#attack').click(function(){
	// 		for(i=0; i<soundEffects.length; i++){
	// 		var a = Math.floor((Math.random()*soundEffects.length));
	// 		new Audio(basePath + soundEffects[a]).play();
			
	// 		};
	// 	});
	// };
});


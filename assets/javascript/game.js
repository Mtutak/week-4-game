var clicks = 0;
var fight = 0;
var attack = 0;
$(document).ready(function () {
	console.log('game');
//Player Chooses Character With Click
	$('.pick').click(function(){
		clicks++;
		console.log('clicks' +clicks);
		if(clicks<2) {
		$(this).addClass('chosen').appendTo('.characterRow').removeClass('pick'); }
		// $('.chosen').appendTo('.character');
		if ($('.characterRow').has('.chosen')) {
		$('.pick').addClass('enemies').appendTo('.enemyRow').removeClass('pick');
			$('.enemies').click(function(){
		fight++;
		console.log('fight' + fight);
		$(this).addClass('defender').appendTo('.defenderRow');
	});
		}
	});
	
$('#attack').click(function(){
	attack++
	console.log('attack ' + attack);

});

var characterOne = {
	health:100, 
	attack:100,
	counter:100
};
var characterTwo = {
	health:100, 
	attack:100,
	counter:100
};
var characterThree = {
	health:100, 
	attack:100,
	counter:100
};


});


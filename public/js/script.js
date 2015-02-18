$(document).ready(function(){	
	
	$('#prev').mouseover(function(){
		$('#plugin-container').animate({scrollLeft:0},2000);
	});
	$('#prev').mouseout(function(){
		$('#plugin-container').stop();
	});
	$('#next').mouseover(function(){
		$('#plugin-container').animate({scrollLeft:$('.plugin-wrapper').width()},2000);
	});
	$('#next').mouseout(function(){
		$('#plugin-container').stop();
	});
});
$(function(){
	$(window).scroll(function(){
		var scrollValue = $(this).scrollTop();
		$('#displayScrollValue').text(scrollValue);
	});
});
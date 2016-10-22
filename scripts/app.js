$(function() {
  paneUp();
	$(window).resize(function() {
		paneUp();
	});
});

function paneUp() {
	var windowHeight = $(window).height();
  $('header').height(windowHeight-10);
}
$(document).ready(function () {
	$(".menu-toggle").click(function () {
		$(".menu-toggle").toggleClass('active');
		$(".navigation-bar").toggleClass('active');
	})
})
$(document).ready(function () {
	$('.carousel').carousel({});
	autoplay();

	function autoplay() {
		$('.carousel').carousel('next');
		setTimeout(autoplay, 5000);
	}
});
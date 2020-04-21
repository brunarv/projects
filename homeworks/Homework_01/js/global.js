$(document).ready(function() {

	// Dropdown Menu
	$(".dropdown-handle").on("click", function (e) {

		e.preventDefault();
		$(".assignments").toggleClass("show");
	});

});
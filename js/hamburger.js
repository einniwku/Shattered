/*
	Here we are going to start working with jQuery, a library that 
	makes working with javascript easier by moving us away from 
	browser-specific (js) considerations into one unified language.

	jQuery works with: $("selector").method();
	selector = what is jQuery selecting? (like in CSS)
	method = what is jQuery doing with the selected item?


	To start off with, we want to tell jQuery to run only once the
	entire page (the DOM) has loaded. Otherwise jQuery may not see 
	all the items of the DOM, and will not be able to interact with 
	them accordingly.

	For example the message below reads as follows:
	$ = jQuery selector (aka. use jQuery for this)
	$(document) = jQuery, go and select the document
	$(document).ready() = jQuery, check when the document is ready

	$(document).ready( function() { // something }) =
	jQuery, when the document is ready, run this function
*/
$(document).ready( function() {


	/* 
		Here is some good jQuery code for debugging, takes
		whatever info you want and makes it appear in the 
		developer tool's console
	*/
	// var variable = "Debugging test";
	// console.log("Info: "+variable);



	/*
		Here we are using jQuery to check the width of the page, with
		which we then cast into the 'width' variable
	*/
	var width = $(window).width();


	/*
		If the 'width' variable (width of the window) is less then
		350px, then we want to perform some actions
	*/
	if (width < 600) {
		$("#navToggle").css("display","block"); // Setting #navToggle to display: block;
		$("nav").hide();		// Setting nav to display: none;
	}

	/*
		Here we are running a function when #navToggle is clicked
	*/
	$("#navToggle").click( function() { 
		// The .slideToggle method slides the 'nav' open/closed over 500ms
		$("nav").slideToggle(500);
	});




});
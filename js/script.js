function animateMenuBar(x) {
	x.classList.toggle("change");
}
/*
    This function takes the menuBar Id and cycles through its classes. It then toggles the classes to either ".bar", or ".change .bar". 
    The changes occur in ".change .bar"
*/
var typed = new Typed(".span", {
	strings: ["Web Developer", "student", "human"],
	typeSpeed: '8',
	backSpeed: '9',
	smartBackspace: true, // Default value
	loop: true,
	startDelay: '10',
	backDelay: '2000',
	fadeOut: false,
	showCursor: true
});
//
//var insta = document.getElementById("ig");
//var github = document.getElementById("github");
//var twitter = document.getElementById("twitter");

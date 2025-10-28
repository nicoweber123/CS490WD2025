//1.) Dynamic Greating Based On Time
function updateGreeting() {
	const hour = new Date().getHours(); //get hour based on users current time
	let greeting;//store message

	if (hour < 12) {
		greeting = "Good Morning!";
	} else if (hour < 18) {
		greeting = "Good Afternoon!";
	} else {
		greeting = "Good Evening!";
	}
	//creates div element
	const greetingElement = document.createElement('div');
	greetingElement.id = 'dynamic-greeting';
	greetingElement.textContent = greeting;
	//add greeting after nav
	document.querySelector('nav').after(greetingElement);
}
	//show up on page load
	document.addEventListener('DOMContentLoaded', function () {
		updateGreeting();
	});

//2.) Dark Mode Toggle
function darkModeToggle() {
	//creates dark mode button
	const darkModeButton = document.createElement('button');
	darkModeButton.textContent = 'Dark Mode';
	darkModeButton.id = 'dark-mode-toggle';

	//adds button to page
	document.body.appendChild(darkModeButton);

	//Toggle dark mode when clicked
	darkModeButton.addEventListener('click', function () {
		document.body.classList.toggle('dark-mode');


		if (document.body.classList.contains('dark-mode')) {
			darkModeButton.textContent = 'Light Mode';
		} else {
			darkModeButton.textContent = 'Dark Mode';
		}
	});
}
document.addEventListener('DOMContentLoaded', function () {
	darkModeToggle();
});

//3.) Display Current Date
function showCurrentDate() {
	//create date element
	const dateElement = document.createElement('div');
	dateElement.id = 'current-date';

	//grab todays date
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; // set weekday and month to words and day and year to numbers
	const today = new Date(); // grab date from user device
	dateElement.textContent = today.toLocaleDateString('en-US', options);// format date as html
	//adds it after greeting
	const greetingElement = document.getElementById('dynamic-greeting');
	if (greetingElement) {
		greetingElement.after(dateElement);
	}
}
	document.addEventListener('DOMContentLoaded', function () {
		showCurrentDate();
	});



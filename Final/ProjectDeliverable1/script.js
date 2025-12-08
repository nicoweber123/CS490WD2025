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
function lightModeButton() {
	//creates dark mode button
	const lightModeButton = document.createElement('button');
	lightModeButton.textContent = 'Light Mode';
	lightModeButton.id = 'light-mode-toggle';

	//adds button to page
	document.body.appendChild(lightModeButton);

	//Toggle dark mode when clicked
	lightModeButton.addEventListener('click', function () {
		document.body.classList.toggle('light-mode');


		if (document.body.classList.contains('light-mode')) {
			lightModeButton.textContent = 'Dark Mode';
		} else {
			lightModeButton.textContent = 'Light Mode';
		}
	});
}
document.addEventListener('DOMContentLoaded', function () {
	lightModeButton();
});

//3.) Scroll to top button
function createScrollToTopButton() {
	//Create Button
	const scrollBtn = document.createElement('button');
	scrollBtn.id = 'scroll-to-top';
	scrollBtn.textContent = 'Top';
	scrollBtn.setAttribute('aria-label', 'Scroll to top');

	//Makes it hidden by default
	scrollBtn.style.display = 'none';

	//Adds button on the page
	document.body.appendChild(scrollBtn);

//Shows button when users scrolls
window.addEventListener('scroll', function () {

	if (window.scrollY > 300) {
		//If users scrolls past 300px, then button shows up
		scrollBtn.style.display = 'block';
	} else {
		scrollBtn.style.display = 'none';
	}
});
// makes it scroll smooth
scrollBtn.addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});
}
//Run on page launch
document.addEventListener('DOMContentLoaded', function () {
	createScrollToTopButton();
});
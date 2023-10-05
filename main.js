// Diapositiva de Sliding panels
const panels = document.querySelectorAll(".panel");

const removeActiveClass = () => {
    for (const panel of panels) {
        if (panel.classList.contains("active")) {
            return panel.classList.remove("active");
        }
    }
};

for (const panel of panels) {
    panel.addEventListener("click", () => {
        removeActiveClass();
        panel.classList.add("active");
    });
}

const buttonTransitionEvent = document.querySelector('.button-transition-event');

function toggleClassEvent() {
	buttonTransitionEvent.classList.toggle('active');
}

function addClassEvent() {
	buttonTransitionEvent.classList.add('finished');
}

buttonTransitionEvent.addEventListener('click', toggleClassEvent);
buttonTransitionEvent.addEventListener('transition', toggleClassEvent);
buttonTransitionEvent.addEventListener('transition', addClassEvent);

const button = document.querySelector('.button-no-transition-event');

function toggleClass() {
	button.classList.toggle('active');

    setTimeout(addClass, 3000)
}

function addClass() {
	button.classList.add('finished');

    setTimeout(() => {
	    button.classList.remove('finished');
        button.classList.remove('active');
    }, 2000)
}

button.addEventListener('click', toggleClass);
console.log({buttonTransitionEvent, button})


// Animar un botón
function animateColor() {
    // Get a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Set the square's background color to the random color
    document.querySelector('.square').style.backgroundColor = randomColor;
}

setInterval(animateColor, 3000);

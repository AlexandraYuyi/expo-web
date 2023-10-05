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

const button = document.querySelector('.button');
const submit = document.querySelector('.submit');

function toggleClass() {
	this.classList.toggle('active');
}

function addClass() {
	this.classList.add('finished');
}

button.addEventListener('click', toggleClass);
button.addEventListener('transition', toggleClass);
button.addEventListener('transition', addClass);


function animateColor() {
    // Get a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
    // Set the square's background color to the random color
    document.querySelector('.square').style.backgroundColor = randomColor;
  }
  
  // Set an interval to call the animateColor function every 3 seconds
  setInterval(animateColor, 3000);
const f = document.getElementById("foo");
document.addEventListener(
    "click",
    (ev) => {
        f.style.transform = `translateY(${ev.clientY - 25}px)`;
        f.style.transform += `translateX(${ev.clientX - 25}px)`;
    },
    false,
);

function myFunction() {
    document.getElementById("myDIV").style.transition = "all 2s";
}


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

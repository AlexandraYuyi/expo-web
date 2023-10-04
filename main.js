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

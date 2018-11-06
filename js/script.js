var allPanels = document.querySelectorAll(".gallery__singlePanel");

function openPanel() {
    this.classList.toggle("singlePanel--open");
}

allPanels.forEach(singlePanel => singlePanel.addEventListener("click", openPanel))


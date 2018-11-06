var allPanels = document.querySelectorAll(".gallery__singlePanel");
var galleryTexts = document.querySelectorAll(".singlePanel__header--open");

function openPanel() {
    this.classList.toggle("singlePanel--open");
}

allPanels.forEach(singlePanel => singlePanel.addEventListener("click", openPanel))

var allPanels = document.querySelectorAll(".gallery__singlePanel");
var galleryTexts = Array.from(document.querySelectorAll(".singlePanel__header--closed"));

function openPanel() {
    galleryTexts.forEach(galleryText => galleryText.classList.toggle("singlePanel__header--open"));
    this.classList.toggle("singlePanel--open");
}

allPanels.forEach(singlePanel => singlePanel.addEventListener("click", openPanel));


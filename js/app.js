const shareButtons = document.querySelectorAll(".share");

shareButtons.forEach((btn) => {
  btn.addEventListener("click", toggleTranslateBack);
});

function toggleTranslateBack() {
  document
    .querySelector(".article-preview-share-box")
    .classList.toggle("translate-back");
}

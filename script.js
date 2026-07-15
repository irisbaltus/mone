console.log('hi')
const button = document.getElementById("toggle-btn");
const slider = document.querySelector(".slide-menu");
const closeSlider = document.getElementById("close-slider");

button.addEventListener("click", () => {
  slider.style.display = "flex";
});

closeSlider.addEventListener("click", () => {
  slider.style.display = "none";
});
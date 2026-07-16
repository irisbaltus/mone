// console.log('hi')
// const button = document.getElementById("toggle-btn");
// const slider = document.querySelector(".slide-menu");
// const closeSlider = document.getElementById("close-slider");

// button.addEventListener("click", () => {
//   slider.style.display = "flex";
// });

// closeSlider.addEventListener("click", () => {
//   slider.style.display = "none";
// });


//slider
const button = document.getElementById("toggle-btn");
const slider = document.querySelector(".slide-menu");
const closeSlider = document.getElementById("close-slider");

button.addEventListener("click", () => {
  slider.classList.add("open");
});

closeSlider.addEventListener("click", () => {
  slider.classList.remove("open");
});

//background
const overlay = document.querySelector(".overlay");

button.addEventListener("click", () => {
    slider.classList.add("open");
    overlay.classList.add("open");
});

closeSlider.addEventListener("click", () => {
    slider.classList.remove("open");
    overlay.classList.remove("open");
});
// menu video button

// ! video button

let videoBtn = document.querySelectorAll(".vid-btn");

videoBtn.forEach((btn) => {
  btn.classList.add("fade");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let videoSlider = document.querySelector("#video-slider");

    // Start the fade-out effect
    videoSlider.style.opacity = 0;

    // After the fade-out effect is done, change the video source and start the fade-in effect
    setTimeout(() => {
      document.querySelector(".controls .active").classList.remove("active");
      btn.classList.add("active");
      let src = btn.getAttribute("data-src");
      videoSlider.src = src;
      videoSlider.style.opacity = 1;
    }, 500); // The duration here should match the transition duration in CSS

    // Add 'fade-out' class on click and then remove it after the transition ends
    btn.classList.add("fade-out");
    setTimeout(() => {
      btn.classList.remove("fade-out");
    }, 250); // The duration here should match the transition duration in CSS
  });
});

// ! menu-bar icon

const menu = document.querySelector(".menu-icon");
console.log(menu);
menu.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("show");
});

// ! Phone number

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

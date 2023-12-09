// ! menu-bar icon
const menu = document.querySelector(".menu-icon");
console.log(menu);
menu.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("show");
});

// ! active-link navbar
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      navLinks.forEach((link) => link.classList.remove("active-link"));

      this.classList.add("active-link");

      localStorage.setItem("activeLink", this.href);

      window.location.href = this.href;
    });
  });

  const activeLink = localStorage.getItem("activeLink");

  if (activeLink) {
    const link = document.querySelector(`.navbar li a[href="${activeLink}"]`);
    if (link) {
      link.classList.add("active-link");
    }
  }
});

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
    }, 500);

    // Add 'fade-out' class on click and then remove it after the transition ends
    btn.classList.add("fade-out");
    setTimeout(() => {
      btn.classList.remove("fade-out");
    }, 250);
  });
});

// ! Provides a loader for the page

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

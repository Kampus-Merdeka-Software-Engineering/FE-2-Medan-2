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
  // Get all the navigation links
  const navLinks = document.querySelectorAll(".navbar li a");

  // Add an event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Remove the active class from all links
      navLinks.forEach((link) => link.classList.remove("active-link"));

      // Add the active class to the clicked link
      this.classList.add("active-link");

      // Store the clicked link in the local storage
      localStorage.setItem("activeLink", this.href);

      // Navigate to the new page
      window.location.href = this.href;
    });
  });

  // Get the active link from the local storage
  const activeLink = localStorage.getItem("activeLink");

  // If there is an active link, add the active class to it
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
    }, 500); // The duration here should match the transition duration in CSS

    // Add 'fade-out' class on click and then remove it after the transition ends
    btn.classList.add("fade-out");
    setTimeout(() => {
      btn.classList.remove("fade-out");
    }, 250); // The duration here should match the transition duration in CSS
  });
});

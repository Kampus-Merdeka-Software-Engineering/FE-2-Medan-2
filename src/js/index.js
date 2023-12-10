// ! menu-bar icon

// Select the menu icon element
const menu = document.querySelector(".menu-icon");

// Log the selected menu element for debugging
console.log(menu);

// Add a click event listener to the menu icon
menu.addEventListener("click", () => {
  // Select the navbar element
  const navbar = document.querySelector(".navbar");

  // Toggle visibility of the navbar on click
  navbar.classList.toggle("hidden");

  // Toggle the 'show' class to animate the navbar
  navbar.classList.toggle("show");
});

// ! active-link navbar

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
  // Select all navigation links
  const navLinks = document.querySelectorAll(".navbar li a");

  // Add click event listeners to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevent the default link click behavior
      event.preventDefault();

      // Remove the 'active-link' class from all links
      navLinks.forEach((link) => link.classList.remove("active-link"));

      // Add the 'active-link' class to the clicked link
      this.classList.add("active-link");

      // Store the href of the clicked link in local storage
      localStorage.setItem("activeLink", this.href);

      // Navigate to the clicked link
      window.location.href = this.href;
    });
  });

  // Retrieve the active link from local storage
  const activeLink = localStorage.getItem("activeLink");

  // If there is an active link stored, add the 'active-link' class to it
  if (activeLink) {
    const link = document.querySelector(`.navbar li a[href="${activeLink}"]`);
    if (link) {
      link.classList.add("active-link");
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", function () {
    // Get all sections
    const sections = document.querySelectorAll("section");

    // Check which section is in the viewport
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        // Remove the 'active-link' class from all links
        navLinks.forEach((link) => link.classList.remove("active-link"));

        // Add the 'active-link' class to the link corresponding to the section in the viewport
        const activeLink = document.querySelector(`.navbar li a[href=".${window.location.pathname}#${section.id}"]`);
        if (activeLink) {
          activeLink.classList.add("active-link");
        }
      }
    });
  });
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

// On page load
window.addEventListener("load", () => {
  // Select the loader element
  const loader = document.querySelector(".loader");

  // Hide the loader
  loader.classList.add("loader--hidden");

  // On loader transition end
  loader.addEventListener("transitionend", () => {
    // Remove the loader from the DOM
    document.body.removeChild(loader);
  });
});

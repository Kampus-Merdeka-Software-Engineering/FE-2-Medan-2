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
  // Select the 'About Us' link from the navigation bar
  const aboutUsLink = Array.from(document.querySelectorAll(".navbar li a"))
                           .find((a) => a.textContent === "About Us");

  // If the 'About Us' link exists, add the 'active-link' class to it
  if (aboutUsLink) {
    aboutUsLink.classList.add("active-link");
  }
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

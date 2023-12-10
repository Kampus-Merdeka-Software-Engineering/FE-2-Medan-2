// ! Handles the functionality of the menu bar icon
function handleMenuBar() {
  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("show");
  });
}

// ! Handles the functionality of the active link in the navbar
function handleActiveLink() {
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar li a");
    const aboutUsLink = Array.from(navLinks).find((link) => link.textContent === "About Us");

    if (aboutUsLink) {
      aboutUsLink.classList.add("active-link");
    }
  });
}

// ! Handles the functionality of the page loader
function handlePageLoader() {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
}

// ! Call the functions
handleMenuBar();
handleActiveLink();
handlePageLoader();
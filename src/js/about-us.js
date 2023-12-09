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
  const aboutUsLink = Array.from(
    document.querySelectorAll(".navbar li a")
  ).find((a) => a.textContent === "About Us");

  if (aboutUsLink) {
    aboutUsLink.classList.add("active-link");
  }
});

// ! Provides a loader for the page

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

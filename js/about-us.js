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
  // Get the "About Us" link
  const aboutUsLink = Array.from(
    document.querySelectorAll(".navbar li a")
  ).find((a) => a.textContent === "About Us");

  // Add the active class to the "About Us" link
  if (aboutUsLink) {
    aboutUsLink.classList.add("active-link");
  }
});

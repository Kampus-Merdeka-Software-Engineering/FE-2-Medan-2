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

    const removeActiveClass = () => navLinks.forEach((link) => link.classList.remove("active-link"));
    const addActiveClass = (link) => link.classList.add("active-link");

    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        removeActiveClass();
        addActiveClass(link);
        localStorage.setItem("activeLink", link.href);
        window.location.href = link.href;
      });
    });

    const activeLink = localStorage.getItem("activeLink");
    if (activeLink) {
      const link = document.querySelector(`.navbar li a[href="${activeLink}"]`);
      if (link) {
        addActiveClass(link);
      }
    }

    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          removeActiveClass();
          const activeLink = document.querySelector(`.navbar li a[href="#${section.id}"]`);
          if (activeLink) {
            addActiveClass(activeLink);
          }
        }
      });
    });
  });
}

// ! Handles the functionality of the video button
function handleVideoButton() {
  const videoButtons = document.querySelectorAll(".vid-btn");

  videoButtons.forEach((btn) => {
    btn.classList.add("fade");
    btn.addEventListener("click", () => {
      const videoSlider = document.querySelector("#video-slider");
      videoSlider.style.opacity = 0;

      setTimeout(() => {
        document.querySelector(".controls .active").classList.remove("active");
        btn.classList.add("active");
        const src = btn.getAttribute("data-src");
        videoSlider.src = src;
        videoSlider.style.opacity = 1;
      }, 500);

      btn.classList.add("fade-out");
      setTimeout(() => {
        btn.classList.remove("fade-out");
      }, 250);
    });
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
handleVideoButton();
handlePageLoader();
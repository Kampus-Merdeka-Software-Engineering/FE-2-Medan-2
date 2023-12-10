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
document.addEventListener("DOMContentLoaded", () => {
  // Select all navigation links
  const navLinks = document.querySelectorAll(".navbar li a");

  // Helper function to remove 'active-link' class from all links
  const removeActiveClass = () => navLinks.forEach((link) => link.classList.remove("active-link"));

  // Helper function to add 'active-link' class to a specific link
  const addActiveClass = (link) => link.classList.add("active-link");

  // Add click event listeners to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Prevent the default link click behavior
      event.preventDefault();

      // Remove 'active-link' class from all links and add it to the clicked link
      removeActiveClass();
      addActiveClass(link);

      // Store the href of the clicked link in local storage to persist the active link across page reloads
      localStorage.setItem("activeLink", link.href);

      // Navigate to the clicked link
      window.location.href = link.href;
    });
  });

  // Retrieve the active link from local storage
  const activeLink = localStorage.getItem("activeLink");

  // If there is an active link stored, add the 'active-link' class to it
  if (activeLink) {
    const link = document.querySelector(`.navbar li a[href="${activeLink}"]`);
    if (link) {
      addActiveClass(link);
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", () => {
    // Get all sections
    const sections = document.querySelectorAll("section");

    // Check which section is in the viewport
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      // Check if the section is in the viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        // Remove 'active-link' class from all links
        removeActiveClass();

        // Add 'active-link' class to the link corresponding to the section in the viewport
        const activeLink = document.querySelector(`.navbar li a[href="#${section.id}"]`);
        if (activeLink) {
          addActiveClass(activeLink);
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

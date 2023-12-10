// ! Define the API URL
const API_URL = "https://dull-jade-parrot-tam.cyclic.app";

// ! Define the base URL for the application
const BASE_URL = "https://kampus-merdeka-software-engineering.github.io/FE-2-Medan-2";

// ! Function to handle the functionality of the menu bar icon
function handleMenuBar() {
  const menuIcon = document.querySelector(".menu-icon");

  // Check if menuIcon exists to avoid errors
  if (!menuIcon) {
    console.error("Menu icon not found");
    return;
  }

  menuIcon.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar");

    // Check if navbar exists to avoid errors
    if (!navbar) {
      console.error("Navbar not found");
      return;
    }

    navbar.classList.toggle("hidden");
    navbar.classList.toggle("show");
  });
}

// ! Function to handle the functionality of the active link in the navbar
function handleActiveLink() {
  document.addEventListener("DOMContentLoaded", () => {
    const bookTicketLink = document.querySelector('.navbar li a[href="./book-ticket.html"]');

    // Check if bookTicketLink exists to avoid errors
    if (!bookTicketLink) {
      console.error("'Book Ticket' link not found");
      return;
    }

    bookTicketLink.classList.add("active-link");
  });
}

// ! Function to initialize the international telephone input plugin on the phone input field
function initializePhoneInput() {
  const phoneInputField = document.querySelector("#phone");

  // Check if phoneInputField exists to avoid errors
  if (!phoneInputField) {
    console.error("Phone input field not found");
    return;
  }

  window.intlTelInput(phoneInputField, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
}

// ! Async function to handle the booking ticket form submission
async function bookTicketForm() {
  try {
    const formData = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      phoneNumber: document.querySelector("#phone").value,
      message: document.querySelector("#message").value,
      destination: document.querySelector("#where-to").value,
      quantity: document.querySelector("#quantity").value,
      arrivalDate: document.querySelector("#arrivalDate").value,
      leavingDate: document.querySelector("#leavingDate").value,
    };

    const response = await fetch(`${API_URL}/book-ticket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    console.log(responseData);

    return responseData;
  } catch (error) {
    console.error(error);
  }
}

// ! Async function to handle booking ticket
async function handleBookTicket() {
  const bookTicketButton = document.querySelector("#bookTicketBtn");

  // Check if bookTicketButton exists to avoid errors
  if (!bookTicketButton) {
    console.error("'Book Ticket' button not found");
    return;
  }

  bookTicketButton.addEventListener("click", async function (event) {
    event.preventDefault();

    try {
      const confirmation = await Swal.fire({
        title: "Confirm to book ticket?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm booking",
        cancelButtonText: "Cancel booking",
      });

      if (confirmation.isConfirmed) {
        const response = await bookTicketForm();

        if (response && response.ticketNumber) {
          await Swal.fire({
            icon: "success",
            title: "Booking Succcesfull",
            text: `Your ticket number is: ${response.ticketNumber}`,
          });
          window.location.href = `${BASE_URL}/src/pages/check-ticket.html`;
        } else {
          await Swal.fire({
            icon: "error",
            title: "Booking Failed",
            text: "Failed to book ticket. Please try again.",
          });
        }
      }
    } catch (error) {
      console.error(error);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occured. Please try again.",
      });
    }
  });
}

// ! Function to handle page loader
function handlePageLoader() {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    // Check if loader exists to avoid errors
    if (!loader) {
      console.error("Loader not found");
      return;
    }

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
}

// ! Call the functions
handleMenuBar();
handleActiveLink();
initializePhoneInput();
handleBookTicket();
handlePageLoader();
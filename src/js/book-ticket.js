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
  // Select the 'Book Ticket' link from the navigation bar
  const bookLink = document.querySelector('.navbar li a[href="./book-ticket.html"]');

  // If the 'Book Ticket' link exists, add the 'active-link' class to it
  if (bookLink) {
    bookLink.classList.add("active-link");
  }
});

// ! Phone number

// Select the phone input field
const phoneInputField = document.querySelector("#phone");

// Initialize the international telephone input plugin on the phone input field
// The 'utilsScript' option is used to specify the location of a script that provides formatting and validation utilities
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// ! Defines the API URL and creates a function called bookTicketForm.

// Define the API URL
const API_URL = "https://dull-jade-parrot-tam.cyclic.app";

// Define an async function to handle the booking ticket form submission
const bookTicketForm = async () => {
  try {
    // Send a POST request to the '/book-ticket' endpoint of the API
    const respond = await fetch(`${API_URL}/book-ticket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // The body of the request is a stringified JSON object containing the form data
      body: JSON.stringify({
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phoneNumber: document.querySelector("#phone").value,
        message: document.querySelector("#message").value,
        destination: document.querySelector("#where-to").value,
        quantity: document.querySelector("#quantity").value,
        arrivalDate: document.querySelector("#arrivalDate").value,
        leavingDate: document.querySelector("#leavingDate").value,
      }),
    }).then((res) => res.json()); // Parse the response as JSON

    // Log the response to the console
    console.log(respond);

    // Return the response
    return respond;
  } catch (error) {
    // Log any errors to the console
    console.error(error);
  }
};

// ! Show the ticket number in an alert when the user clicks the Book Now button.

// Define the base URL for the application
const BASE_URL = "https://kampus-merdeka-software-engineering.github.io/FE-2-Medan-2";

// Add a click event listener to the 'Book Ticket' button
document.querySelector("#bookTicketBtn").addEventListener("click", async function (event) {
  // Prevent the default button click behavior
  event.preventDefault();

  try {
    // Display a confirmation dialog to the user
    const confirmation = await Swal.fire({
      title: "Confirm to book ticket?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm booking",
      cancelButtonText: "Cancel booking",
    });

    // If the user confirmed the booking
    if (confirmation.isConfirmed) {
      // Call the 'bookTicketForm' function and store the response
      const response = await bookTicketForm();
      console.log(response);

      // If the response contains a ticket number, display a success message and redirect to the 'Check Ticket' page
      if (response && response.ticketNumber) {
        await Swal.fire({
          icon: "success",
          title: "Booking Succcesfull",
          text: `Your ticket number is: ${response.ticketNumber}`,
        });
        window.location.href = `${BASE_URL}/check-ticket.html`;
      } else {
        // If the response does not contain a ticket number, display an error message
        await Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: "Failed to book ticket. Please try again.",
        });
      }
    }
  } catch (error) {
    // If an error occurred, log it to the console and display an error message
    console.error(error);
    await Swal.fire({
      icon: "error",
      title: "Error",
      text: "An error occured. Please try again.",
    });
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

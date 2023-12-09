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

// ! Defines the API URL and creates a function checkTicketForm.

// Add a click event listener to the 'Check Ticket' button
document.querySelector("#checkTicketBtn").addEventListener("click", async function () {
  try {
    // Get the ticket number from the input field
    const ticketNumber = document.querySelector("#ticketNumber").value;

    // If the ticket number is not provided, throw an error
    if (!ticketNumber) {
      throw new Error("Please enter a valid ticket number.");
    }

    // Call the 'checkTicketForm' function to fetch the ticket data
    const response = await checkTicketForm(ticketNumber);

    // Fill the form fields with the fetched ticket data
    document.querySelector("#name").value = response.ticket.name;
    document.querySelector("#email").value = response.ticket.email;
    document.querySelector("#phone").value = response.ticket.phoneNumber;
    document.querySelector("#destination").value = response.ticket.destination;
    document.querySelector("#quantity").value = response.ticket.quantity;
    document.querySelector("#arrivalDate").value = response.ticket.arrivalDate;
    document.querySelector("#leavingDate").value = response.ticket.leavingDate;

    // Display a success message
    Swal.fire({
      icon: "success",
      title: "Ticket Checked!",
      text: "The ticket number you entered is valid.",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    // If an error occurred, log it to the console and display an error message
    console.error(error);
    Swal.fire({
      icon: "error",
      title: "Invalid ticket number",
      text: "The ticket number you entered does not match any in our system. Please check the number and try again.",
      customClass: {
        text: "text-class",
      },
    });
  }
});

// Define the API URL
const API_URL = "https://dull-jade-parrot-tam.cyclic.app";

// Define an async function to fetch ticket data from the API
const checkTicketForm = async (ticketNumber) => {
  try {
    // Send a GET request to the '/check-ticket' endpoint of the API
    const response = await fetch(`${API_URL}/check-ticket/${ticketNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error("Failed to fetch ticket data.");
    }

    // Parse the response as JSON and return it
    const data = await response.json();
    return data;
  } catch (error) {
    // If an error occurred, log it to the console and throw it
    console.error(error);
    throw new Error("An error occurred while fetching ticket data.");
  }
};

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

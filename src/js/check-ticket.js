// ! Define the API URL
const API_URL = "https://dull-jade-parrot-tam.cyclic.app";

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

// ! Async function to fetch ticket data from the API
async function fetchTicketData(ticketNumber) {
  try {
    const response = await fetch(`${API_URL}/check-ticket/${ticketNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch ticket data.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching ticket data.");
  }
}

// ! Async function to handle the 'Check Ticket' button click event
async function handleCheckTicket() {
  document.querySelector("#checkTicketBtn").addEventListener("click", async function () {
    try {
      const ticketNumber = document.querySelector("#ticketNumber").value;

      if (!ticketNumber) {
        throw new Error("Please enter a valid ticket number.");
      }

      const response = await fetchTicketData(ticketNumber);

      document.querySelector("#name").value = response.ticket.name;
      document.querySelector("#email").value = response.ticket.email;
      document.querySelector("#phone").value = response.ticket.phoneNumber;

      let destination = response.ticket.destination.replace(/-/g, ' ');
      document.querySelector("#destination").value = destination;

      document.querySelector("#quantity").value = response.ticket.quantity;
      document.querySelector("#arrivalDate").value = response.ticket.arrivalDate;
      document.querySelector("#leavingDate").value = response.ticket.leavingDate;

      Swal.fire({
        icon: "success",
        title: "Ticket Checked!",
        text: "The ticket number you entered is valid.",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
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
handleCheckTicket();
handlePageLoader();
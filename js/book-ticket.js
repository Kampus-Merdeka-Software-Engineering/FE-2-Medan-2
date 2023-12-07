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
  // Get the "Book" link
  const bookLink = document.querySelector(
    '.navbar li a[href="./book-ticket.html"]'
  );

  // Add the active class to the "Book" link
  if (bookLink) {
    bookLink.classList.add("active-link");
  }
});

// ! Phone number

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// ! Defines the API URL and creates a function called bookTicketForm.

const API_URL = "https://dull-jade-parrot-tam.cyclic.app";

const bookTicketForm = async () => {
  try {
    const respond = await fetch(`${API_URL}/book-ticket`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    }).then((res) => res.json());
    console.log(respond);
    return respond;
  } catch (error) {
    console.error(error);
  }
};

// ! Show the ticket number in an alert when the user clicks the Book Now button.

const BASE_URL =
  "https://kampus-merdeka-software-engineering.github.io/FE-2-Medan-2";

document
  .querySelector("#bookTicketBtn")
  .addEventListener("click", async function (event) {
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
        console.log(response);
        if (response && response.ticketNumber) {
          await Swal.fire({
            icon: "success",
            title: "Booking Succcesfull",
            text: `Your ticket number is: ${response.ticketNumber}`,
          });
          window.location.href = `${BASE_URL}/check-ticket.html`;
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

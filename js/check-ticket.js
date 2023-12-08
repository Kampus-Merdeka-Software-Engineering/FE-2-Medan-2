// ! menu-bar icon

const menu = document.querySelector(".menu-icon");
console.log(menu);
menu.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("show");
});

// ! Defines the API URL and creates a function checkTicketForm.

document
  .querySelector("#checkTicketBtn")
  .addEventListener("click", async function () {
    try {
      const ticketNumber = document.querySelector("#ticketNumber").value;
      console.log(ticketNumber);
      if (!ticketNumber) {
        throw new Error("Please enter a valid ticket number.");
      }

      const response = await checkTicketForm(ticketNumber);
      console.log(response);

      document.querySelector("#name").value = response.ticket.name;
      document.querySelector("#email").value = response.ticket.email;
      document.querySelector("#phone").value = response.ticket.phoneNumber;
      document.querySelector("#destination").value =
        response.ticket.destination;
      document.querySelector("#quantity").value = response.ticket.quantity;
      document.querySelector("#arrivalDate").value =
        response.ticket.arrivalDate;
      document.querySelector("#leavingDate").value =
        response.ticket.leavingDate;

      // Display success message using SweetAlert
      Swal.fire({
        icon: "success",
        title: "Ticket Checked!",
        text: "The ticket number you entered is valid.",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);

      // Display error message using SweetAlert
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

// ! Defines an API URL and a function to fetch ticket data from the API.

const API_URL = "https://dull-jade-parrot-tam.cyclic.app";

const checkTicketForm = async (ticketNumber) => {
  const spinnerTarget = document.querySelector("#spinner");
  const spinner = new Spinner().spin(spinnerTarget);
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
    console.log({ data });

    spinner.stop();
    return data;
  } catch (error) {
    console.error(error);
    spinner.stop();
    throw new Error("An error occurred while fetching ticket data.");
  }
};

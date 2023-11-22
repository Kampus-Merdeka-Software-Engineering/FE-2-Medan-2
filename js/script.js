// menu video button

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
    }, 500); // The duration here should match the transition duration in CSS

    // Add 'fade-out' class on click and then remove it after the transition ends
    btn.classList.add("fade-out");
    setTimeout(() => {
      btn.classList.remove("fade-out");
    }, 250); // The duration here should match the transition duration in CSS
  });
});

// ! menu-bar icon

const menu = document.querySelector(".menu-icon");
console.log(menu);
menu.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("show");
});

// ! Phone number

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// ! Redirect from book section to check ticket section after user receive ticket number

document
  .querySelector("#book-ticket-btn .btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // let ticketNumber = Math.floor(Math.random() * 1000000); // Generate a random ticket number
    // alert(`Your ticket number is ${ticketNumber}`); ==> Digunakan nanti di backend

    let formData = {
      ticketNumber: ticketNumber,
      name: document.getElementById("name").value,
      whereTo: document.getElementById("where-to").value,
      email: document.getElementById("email").value,
      quantity: document.getElementById("quantity").value,
      phone: document.getElementById("phone").value,
      arrival: document.querySelector(
        'input[type="datetime-local"]:nth-child(1)'
      ).value,
      leaving: document.querySelector(
        'input[type="datetime-local"]:nth-child(2)'
      ).value,
    };

    // localStorage.setItem("formData", JSON.stringify(formData)); // Store the form data in local storage

    window.location.href = "check-ticket.html"; // Redirect to the check-ticket.html page
  });

// window.onload = function () {
//   let formData = JSON.parse(localStorage.getItem("formData")); // Retrieve the form data from local storage

//   document.querySelector(".ticket-column:nth-child(1) input").value =
//     formData.ticketNumber;
//   document.querySelector(".ticket-column:nth-child(2) input").value =
//     formData.name;
//   document.querySelector(".ticket-column:nth-child(3) input").value =
//     formData.email;
//   document.querySelector(".ticket-column:nth-child(4) input").value =
//     formData.phone;
//   document.querySelector(".ticket-column:nth-child(5) input").value =
//     formData.whereTo;
//   document.querySelector(".ticket-column:nth-child(6) input").value =
//     formData.quantity;
//   document.querySelector(".ticket-column:nth-child(7) input").value =
//     formData.arrival;
//   document.querySelector(".ticket-column:nth-child(8) input").value =
//     formData.leaving;
// };

// menu-bar icon

const menu = document.querySelector(".menu-icon");
menu.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("show");
});

// Phone number

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// Redirect to book section

let book_url = document.getElementById("book_url");

book_url.addEventListener("click", () => {
  window.location.href = "book-ticket.html";
})

document.getElementById("book").onclick = 
  function () {
    window.location.href = "book.html";
  }


// Redirect from book section to check ticket section


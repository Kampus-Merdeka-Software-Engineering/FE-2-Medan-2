// Phone number

const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });

// Review slide

$(document).ready(function(){
  $('.carousel').carousel({
    padding: 200
});
autoplay();
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4500);
}
});
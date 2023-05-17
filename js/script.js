// Selecting html elements
const userEmail = document.getElementById("email-address");
const mailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
const form = document.querySelector(".form");
const errorMsg = document.querySelector(".error-msg");
let section = document.querySelector("section");

// show error message
function validateEmail() {
  if (!userEmail.value.match(mailRegex)) {
    form.classList.add("invalid");
    errorMsg.textContent = "Please provide a valid email address";
  } else {
    form.classList.remove("invalid");
  }
}

// check if form is valid before submiting
function isFormValid() {
  if (userEmail.value.match(mailRegex)) {
    section.classList.add("hide");
  }
}

// form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateEmail();
  isFormValid();
  userEmail.addEventListener("input", validateEmail);
});

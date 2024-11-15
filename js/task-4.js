const form = document.querySelector(".login-form");
const emailInput = form.elements["email"];
const passwordInput = form.elements["password"];

const dataBase = {};

form.addEventListener("submit", (event) => {
  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    event.preventDefault();
    alert("All form fields must be filled in");
  } else {
    event.preventDefault();
    dataBase.email = emailInput.value.trim();
    dataBase.password = passwordInput.value.trim();
    form.reset();
    console.log(dataBase);
  }
});

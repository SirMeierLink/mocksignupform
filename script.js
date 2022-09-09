const form = document.querySelector("form");
const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

function checkInput() {
  let first_name_value = first_name.value.trim();
  let last_name_value = last_name.value.trim();
  let email_value = email.value.trim();
  let password_value = password.value.trim();

  if (first_name_value === "") {
    setErrorMsg(first_name, "First Name cannot be empty");
  } else {
    success(first_name);
  }

  if (last_name_value === "") {
    setErrorMsg(last_name, "Last Name cannot be empty");
  } else {
    success(last_name);
  }

  if (email_value === "") {
    setErrorMsg(email, "Looks like this is not an email");
  } else {
    success(email);
  }

  if (password_value === "") {
    setErrorMsg(password, "Password cannot be empty");
  } else {
    success(password);
  }
}

function setErrorMsg(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  let img = parent.querySelector("img");
  small.className = "error-message";
  img.className = "error-icon";
  small.textContent = message;
}

function success(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  let img = parent.querySelector("img");
  small.className = "error-message hide";
  img.className = "error-icon hide";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

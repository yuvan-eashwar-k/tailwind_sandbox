const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show Input Error Message
function showError(input, message) {
  input.className =
    "block w-full p-2 text-sm border-2 border-red-400 border-solid rounded-sm focus:border-gray-700";
  input.nextElementSibling.innerHTML = message;
  input.nextElementSibling.className = 'absolute bottom-0 left-0 visible text-red-600'
}

function showSuccess(input) {
  input.className =
    "block w-full p-2 text-sm border-2 border-green-400 border-solid rounded-sm focus:border-gray-700";
    input.nextElementSibling.className = 'absolute bottom-0 left-0 visible text-green-600'
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
    showSuccess(email)
  } else {
    showError(email, "Enter valid Email")
  }

  if (password2.value !== password.value) {
    showError(password2, 'Password does not match')
    password.className =
    "block w-full p-2 text-sm border-2 border-red-400 border-solid rounded-sm focus:border-gray-700";
  
  } else {
    showSuccess(password);
    showSuccess(password2);
  }

  if (password.value === '') {
    showError(password, "Please enter a password")
  }


  if (password2.value === '') {
    showError(password2, "Please enter a password")
  }
  
});

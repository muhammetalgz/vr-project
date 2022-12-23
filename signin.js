const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const button = document.getElementById("loginButton");
const email = document.getElementById("email");
const firstName = document.getElementById("name");
const form = document.querySelector(".form");
const text = document.getElementById("lale");


togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

button.addEventListener("click", mailFunction) ;

function mailFunction() {
  if (email.value === "kullanıcı@gmail.com" && password.value === "kullanıcı5" && firstName.value === "Jack"){
    showalert("success", "You have successfully logged in");
    window.location = "vr.html";
   
  }
  else {
    showalert("danger", "Incorrect entry. Please enter correct information")
  }
}

function showalert(type, message) {
  const alert = document.createElement("div");

  alert.className = `alert alert-${type}`;
  alert.textContent = message;

  form.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
}


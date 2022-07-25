function check() {
  const pwd = document.getElementById('pwd').value;
  const pwdCheck = document.getElementById('pwd-check').value;
  const pwdContainer = document.getElementById('pwd-container');
  const pwdCheckContainer = document.getElementById('pwd-check-container');
  const submitButton = document.getElementById('submit');

  if (pwd !== pwdCheck) {
    pwdContainer.classList.add("pwd-error");
    pwdCheckContainer.classList.add("pwd-error");
    submitButton.disabled = true;
  }
  else if (pwd === pwdCheck) {
    pwdContainer.classList.remove("pwd-error");
    pwdCheckContainer.classList.remove("pwd-error");
    submitButton.disabled = false;
  }
}

console.log("running");
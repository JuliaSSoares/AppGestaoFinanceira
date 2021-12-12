document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#password').addEventListener('blur', validatePassword);


function validateEmail(e) {
  const email = document.querySelector('#email');
  const re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
  const ree = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}\.([a-zA-Z]){2,5}$/;
  const reSpaces = /^\S*$/;
  if (reSpaces.test(email.value) && (re.test(email.value) || ree.test(email.value))) {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
      return true;
      
  } else {
    email.classList.add('is-invalid');
    email.classList.remove('is-valid');

    return false;
  }
}

function validatePassword() {
  const password = document.querySelector('#password');
  const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/;
  const reSpaces = /^\S*$/;
  if (re.test(password.value) && reSpaces.test(password.value)) {
    password.classList.remove('is-invalid');
    password.classList.add('is-valid');

    return true;
  } else {
    password.classList.add('is-invalid');
    password.classList.remove('is-valid');

    return false;
  }
}
(function () {
  const forms = document.querySelectorAll('.needs-validation');
  for (let form of forms) {
    form.addEventListener(
      'submit',
      function (event) {
        if (
          !form.checkValidity() ||
          !validateEmail() ||
          !validatePassword()
        ) {
          event.preventDefault();
          event.stopPropagation();
          
        } else {
          form.classList.add('was-validated');
        }
      },
      false
    );
  }
})();




  
document.querySelector('#email').addEventListener('blur', validateEmail);

function validateEmail(e) {
  const reSpaces = /^\S*$/;
  const email = document.querySelector('#email');
  const re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
  const ree = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}\.([a-zA-Z]){2,5}$/;

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

(function () {
  const forms = document.querySelectorAll('.needs-validation');
  for (let form of forms) {
    form.addEventListener(
      'submit',
      function (event) {
        if (
          !form.checkValidity() ||
          !validateEmail()
        ) {
          event.preventDefault();
          event.stopPropagation();
          alert("E-mail de recuperação enviado")
          
        } else {
          form.classList.add('was-validated');
        }
      },
      false
    );
  }
})();
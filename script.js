const form = document.querySelector('form');

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = form.elements.email;
  const isValidEmail = validateEmail(email);
  const errorBox = document.querySelector('.error');
  if (isValidEmail) {
    errorBox.classList.remove('invalid');
    form.submit();
  } else {
    errorBox.classList.add('invalid');
  }
})
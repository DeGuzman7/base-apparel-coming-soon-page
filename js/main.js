const inputElement = document.querySelector('#email');
const submitButton = document.querySelector('#submit');
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');
const formPanel = document.querySelector('.form-panel');
let errors = [];

submitButton.addEventListener('click', e => {
  // remove success class
  errorMessage.classList.remove('success-message');

  // reset errors
  errors = [];
  // prevent default action of form
  e.preventDefault();
  // validate email address
  const email = inputElement.value;

  if (email == '' || email === undefined) {
    errors.push('Please provide us your email');
    // show error
    errorIcon.style.display = 'block';
    inputElement.style.borderColor = "#f96262"; 
    errorMessage.innerText = errors[0];
  } else if (!email.match(RegEmail)) {
    errors.push('Please provide us your valid email');
    // show error icon
    errorIcon.style.display = 'block';
    errorMessage.innerText = errors[0];
  }

  if (!errors.length > 0) {
    // hide error icon
    errorIcon.style.display = 'none';
    errorMessage.classList.add('success-message');
    errorMessage.innerText =('Thank you for subscribing to our newsletter');
    inputElement.style.borderColor = "green";
  }
});
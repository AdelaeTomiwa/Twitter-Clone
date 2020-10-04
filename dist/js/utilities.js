// Function of time out for the form to come in
document.addEventListener('DOMContentLoaded', showForm);

function showForm() {
   const forms = document.querySelector('.forms');
   setTimeout(function () {
      forms.style.display = 'block';
   }, 3000);
}

// // Change the Input Place Holder when the "Sign into twiter anchor tag is click"
// const logIn = document.querySelector('.log-in');
// logIn.addEventListener('click', () => {
//    // Change the class of the form from register to login
//    const registerForm = document.querySelector('.register-form');
//    registerForm.classList.replace('register-form', 'login-form');

//    // Grab the Placeholder in the form
//    const name = document.querySelector('.name-input');
//    const email = document.querySelector('.email-input');

//    // Change the Type of input
//    email.type = 'password';

//    // Change the placeholder
//    name.placeholder = 'Name, Email Address or Username';
//    email.placeholder = 'Password';
// });

// // Change the Placeholder of the input what both fields are filled in the Register Form
// const registerForm = document.querySelector('.register-form');
// registerForm.addEventListener('submit', (e) => {
//    // Grab the Input Values
//    const nameInput = document.querySelector('.name-input');
//    const emailInput = document.querySelector('.email-input');
//    const continueBtn = document.querySelector('.continue-btn');
//    if (nameInput.value === '' || emailInput.value === '') {
//    } else {
//       continueBtn.style.backgroundColor = '#5DA9DD';
//       // Take them to home.fa-html5
//       window.location = 'home.html';

//       // Clear all Fields and change the Place Holder
//       nameInput.value = '';
//       emailInput.value = '';
//    }
// });

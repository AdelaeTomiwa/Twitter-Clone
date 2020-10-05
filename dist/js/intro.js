// UI
class UI {
   static showForm() {
      const registerFormOne = document.querySelector('.register-form-one');

      setTimeout(function () {
         registerFormOne.style.display = 'block';
      }, 3000);
   }

   static goToHomePage() {
      setTimeout(function () {
         window.location = 'home.html';
      }, 3000);
   }
}

// Storage
class Storage {
   // save name to local storage
   static saveUserName(userName) {
      let userNames;
      if (localStorage.getItem('username') === null) {
         userNames = '';
      } else {
         userNames = JSON.parse(localStorage.getItem('username'));
      }

      userNames = userName;
      console.log(userNames);

      localStorage.setItem('username', JSON.stringify(userNames));
   }
}

// Events and Selectors
// Selectors
const registerFormOne = document.querySelector('.register-form-one');
const registerFormTwo = document.querySelector('.register-form-two');
const userName = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const continueBtnOne = document.querySelector(
   '.register-form-one .continue-btn'
);
const passwordInput = document.querySelector('.password-input');
const confirmPasswordInput = document.querySelector('.confirm-password-input');
const continueBtnTwo = document.querySelector(
   '.register-form-two .continue-btn'
);

registerFormOne.addEventListener('submit', signUp);
registerFormTwo.addEventListener('submit', continueSignUp);

// Functions
// Function of time out for the form to come in
document.addEventListener('DOMContentLoaded', showForm);

function showForm() {
   UI.showForm();
}

function signUp(e) {
   e.preventDefault();
   if (userName.value === '' || emailInput.value === '') {
      continueBtnOne.style.backgroundColor = '#b1d6ef';
   } else {
      continueBtnOne.style.backgroundColor = '#5DA9DD';

      Storage.saveUserName(userName.value);

      // Go the next sign up
      setTimeout(function () {
         registerFormTwo.style.display = 'block';
      }, 1500);
   }
}

function continueSignUp(e) {
   e.preventDefault();

   if (passwordInput.value === '' || confirmPasswordInput.value === '') {
      continueBtnTwo.style.backgroundColor = '#b1d6ef';
   } else {
      continueBtnTwo.style.backgroundColor = '#5DA9DD';

      UI.goToHomePage();
   }
}

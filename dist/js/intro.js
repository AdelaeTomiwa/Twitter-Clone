// UI
class UI {
   static showForm() {
      const registerFormOne = document.querySelector('.register-form-one');

      setTimeout(function () {
         registerFormOne.style.display = 'block';
      }, 3000);
   }

   static goToThirdForm() {}

   static goToHomePage() {
      setTimeout(function () {
         window.location = 'home.html';
      }, 3000);
   }
}

// Storage
class Storage {
   // save name to local storage
   static saveName(name) {
      let names;
      if (localStorage.getItem('name') === null) {
         names = '';
      } else {
         names = JSON.parse(localStorage.getItem('name'));
      }

      names = name;

      localStorage.setItem('name', JSON.stringify(names));
   }

   static saveUsername(username) {
      let userNames;
      if (localStorage.getItem('username') === null) {
         userNames = '';
      } else {
         userNames = JSON.parse(localStorage.getItem('username'));
      }

      userNames = username;

      localStorage.setItem('username', JSON.stringify(userNames));
   }
}

// Events and Selectors
// Selectors
const registerFormOne = document.querySelector('.register-form-one');
const registerFormUsername = document.querySelector('.register-form-username');
const registerFormTwo = document.querySelector('.register-form-two');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const continueBtnOne = document.querySelector(
   '.register-form-one .continue-btn'
);
const passwordInput = document.querySelector('.password-input');
const confirmPasswordInput = document.querySelector('.confirm-password-input');
const continueBtnTwo = document.querySelector(
   '.register-form-two .continue-btn'
);
const userName = document.querySelector('.username-input');
const continueBtnUsername = document.querySelector(
   '.register-form-username .continue-btn'
);

registerFormOne.addEventListener('submit', signUp);
registerFormUsername.addEventListener('submit', continueSignUpOne);
registerFormTwo.addEventListener('submit', continueSignUpTwo);

// Functions
// Function of time out for the form to come in
document.addEventListener('DOMContentLoaded', showForm);

function showForm() {
   UI.showForm();
}

function signUp(e) {
   e.preventDefault();
   if (nameInput.value === '' || emailInput.value === '') {
      continueBtnOne.style.backgroundColor = '#b1d6ef';
   } else {
      continueBtnOne.style.backgroundColor = '#5DA9DD';

      Storage.saveName(nameInput.value);

      // Go the next sign up
      setTimeout(function () {
         registerFormUsername.style.display = 'block';
      }, 1500);
   }
}

function continueSignUpOne(e) {
   e.preventDefault();
   console.log('yes');
   if (userName.value === '') {
      console.log('yes');
      continueBtnUsername.style.backgroundColor = '#b1d6ef';
   } else {
      continueBtnUsername.style.backgroundColor = '#5DA9DD';

      Storage.saveUsername(userName.value);

      // Go the next sign up
      setTimeout(function () {
         registerFormTwo.style.display = 'block';
      }, 1500);
   }
}

function continueSignUpTwo(e) {
   e.preventDefault();

   if (passwordInput.value === '' || confirmPasswordInput.value === '') {
      continueBtnTwo.style.backgroundColor = '#b1d6ef';
   } else {
      continueBtnTwo.style.backgroundColor = '#5DA9DD';

      UI.goToHomePage();
   }
}

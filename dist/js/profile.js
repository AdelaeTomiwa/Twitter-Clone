// Grab the name in the Local Storage
class UI {
   static displayName() {
      const name = Storage.getName();
      const username = Storage.getUsername();
      // Set the Title of the Profiile Page to the name
      document.title = `${name} (@${username}) / Twitter`;

      // Set Profile Header Name
      const profileHeaderName = document.querySelector(
         '.profile-header-name h3'
      );
      profileHeaderName.innerHTML = name;

      // Set Profile Name
      const profileName = document.querySelector('.profile-name h3');
      const profileSubName = document.querySelector('.profile-name p');
      profileName.innerHTML = name;
      profileSubName.innerHTML = `@${username}`;
   }

   static displayUsername() {
      const name = Storage.getName();
      const username = Storage.getUsername();
      // Set the user Profile at the bottom of the home page of the Profiile Page to the username
      // Grab the Div with the class of user
      const profileUserName = document.querySelector('.users h4');
      const profileUserSubName = document.querySelector('.users p');
      profileUserName.innerHTML = name;
      profileUserSubName.innerHTML = `@${username}`;
   }
}

// Storage
class Storage {
   static getName(name) {
      let names;
      if (localStorage.getItem('name') === null) {
         names = [];
      } else {
         names = JSON.parse(localStorage.getItem('name'));
      }
      return names;
   }

   static getUsername() {
      let username;
      if (localStorage.getItem('username') === null) {
         username = [];
      } else {
         username = JSON.parse(localStorage.getItem('username'));
      }
      return username;
   }
}

// Events
document.addEventListener('DOMContentLoaded', UI.displayName());
document.addEventListener('DOMContentLoaded', UI.displayUsername());

// Selectors

// Function

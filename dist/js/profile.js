// Grab the name in the Local Storage
class UI {
   static displayName() {
      const name = Storage.getName();
      // Set the Title of the Profiile Page to the name
      console.log(name);

      document.title = `${name} / twitter.com`;
   }

   static displayUsername() {
      const username = Storage.getUsername();
      // Set the user Profile at the bottom of the home page of the Profiile Page to the username
      // Grab the Div with the class of user
      const profileUserName = document.querySelector('.users h4');
      const profileUserSubName = document.querySelector('.users p');
      profileUserName.innerHTML = username;
      profileUserSubName.innerHTML = `@${username}`;
   }
}

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

document.addEventListener('DOMContentLoaded', UI.displayName());
document.addEventListener('DOMContentLoaded', UI.displayUsername());

// Grab the Username in the Local Storage
class UI {
   static displayUserName() {
      const userName = Storage.getUserName();
      // Set the Title of the Profiile Page to the username
      console.log(userName);
      document.title = `${userName} / twitter.com`;
   }
}

class Storage {
   static getUserName(userName) {
      let UserName;
      if (localStorage.getItem('username') === null) {
         UserName = [];
      } else {
         UserName = JSON.parse(localStorage.getItem('username'));
      }
      return UserName;
   }
}

document.addEventListener('DOMContentLoaded', UI.displayUserName);

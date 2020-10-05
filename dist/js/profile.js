// Form Class
class EditProfileForm {
   constructor(name, bio, location, website) {
      this.name = name;
      this.bio = bio;
      this.location = location;
      this.website = website;
   }
}

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
   // Grab the name in the Local Storage
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
// Events for going back to the home page
document.querySelector('.profile-header i').addEventListener('click', () => {
   location = 'home.html';
});
// Event to bring in the edit profile form
document.querySelector('.edit-profile-btn').addEventListener('click', () => {
   // Create a form
   const editProfileSection = document.createElement('section');
   editProfileSection.classList.add('edit-profile-section');
   editProfileSection.innerHTML = `
   <div class ="edit-profile">
      <div class="edit-profile-section-header">
         <div class="edit-section-title">
            <div class="close-profile-burger">
               <div class="close-profile-burger-line-1"></div>
               <div class="close-profile-burger-line-2"></div>
               <div class="close-profile-burger-line-3"></div>
            </div>
            <div>
               <h3>Edit Profile</h3>
            </div>
            </div>
            <div class="save-profile-btn">
               <button class="save-profile-btn">
                  <h4>Save</h4>
               </button>
            </div>
         </div>
         <div class="profile-image">
            <div class="profile-img-cover">
               <img src="img/user-profile-cover.png" alt="" />
            </div>
            <div class="profile-img-icon">
               <img
                  class="rounded-img"
                  src="img/user-profile-icon.png"
                  alt=""
               />
            </div>
         </div>
         <form class="edit-profile-form">
            <div class="form-group">
               <label for="name"><p>Name</p></label>
               <input type="text" id="edit-name" />
            </div>
            <div class="form-group">
               <label for="bio"><p>Bio</p></label>
               <input type="text" id="edit-bio" />
            </div>
            <div class="form-group">
               <label for="location"><p>Location</p></label>
               <input type="text" id="edit-location" />
            </div>
            <div class="form-group">
               <label for="website"><p>Website</p></label>
               <input type="text" id="edit-website" />
            </div>
         </form>
      </div>
   `;

   // Make a dark and transparent overlay
   const darkOverlay = document.querySelector('.dark-overlay');
   darkOverlay.style.display = 'block';

   // Append the Form to the Body
   document.body.appendChild(editProfileSection);

   // Instatiate Form
   // const editProfileForm = new EditProfileForm()
});

// Selectors

// Function
//

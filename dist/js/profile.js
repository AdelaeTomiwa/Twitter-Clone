// Form Class
class EditProfileForm {
   constructor(name, bio, location, website) {
      this.name = name;
      this.bio = bio;
      this.location = location;
      this.website = website;
   }
}

// UI Class
class UI {
   static displayName() {
      const name = Storage.getName();
      const username = Storage.getUsername();
      // Set the Title of the Profiile Page to the name
      document.title = `${name} (@${username}) / Twitter`;

      // document.URL = `twitte.com/${name}`;

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

   static reNameProfile(formValues) {
      const reName = Storage.resaveProfile();
      const username = Storage.getUsername();

      // Set Profile Header Name
      const profileHeaderName = document.querySelector(
         '.profile-header-name h3'
      );
      profileHeaderName.innerHTML = formValues.name;

      // Set the user Profile at the bottom of the home page of the Profiile Page to the username
      // Grab the Div with the class of user
      const profileUserName = document.querySelector('.users h4');
      profileUserName.innerHTML = formValues.name;

      // Set the Title of the Profiile Page to the name
      document.title = `${formValues.name} (@${username}) / Twitter`;

      // Set Profile Name
      const profileName = document.querySelector('.profile-name h3');
      const profileSubName = document.querySelector('.profile-name p');
      profileName.innerHTML = formValues.name;
      profileSubName.innerHTML = `@${username}`;

      // Set the Bio
      const profileBio = document.querySelector('.profile-bio p');
      profileBio.innerHTML = formValues.bio;
   }

   // Display Profile Tweets From Local Storage
   static displayTweetsFromLocalStorage() {
      const tweets = Storage.getTweetsFromLocalStorage();
      // Grab the name
      const name = Storage.getName();
      // Grab the Username
      const username = Storage.getUsername();

      // Loop Through all of them
      tweets.forEach((tweet) => {
         // Recreate what I did in the App.js (Home Page)
         const profiletweetDiv = document.createElement('div');
         profiletweetDiv.classList.add('profile-tweet');
         profiletweetDiv.innerHTML = `
            <div class="container">
               <div class="profile-tweet-head">
                  <a href="#">
                     <div class="name">
                        <img
                           class="rounded-img"
                           src="img/user-one.jpg"
                           alt=""
                        />
                        <h4>${name}</h4>
                        <p>@${username}</p>
                        <p>.15h</p>
                     </div>
                  </a>
                  <div>
                     <i class="fas fa-chevron-down chevron-down"></i>
                     <ul class="extra-options-closed">
                        <li>
                           <a class ="delete" href="#">
                              <i class="fas fa-trash "></i>
                              Delete
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fas fa-thumbtack"></i>
                              Pin To Your Profile
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fas fa-code"></i>
                              Embed Tweet
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fas fa-chart-bar"></i>
                              View Activity
                           </a>
                        </li>
                     </ul>
               </div>
            </div>
            <div class="profile-tweet-body">
               <div class="text">
                 ${tweet.tweet}
               </div>
               <div class="post-img">
                  <img src="img/user-one.jpg" alt="" />
               </div>

               <div class="profile-tweet-body-utilities">
                  <i class="fas fa-comment-alt comment"></i>
                  <i class="fas fa-retweet retweet"></i>
                  <i class="fas fa-heart like"></i>
                  <i class="fas fa-download"></i>
               </div>
            </div>
         </div>
         `;

         // Append to the Profile Tweet Section in the HTML
         const profileTweetSection = document.querySelector(
            '.profile-tweet-section'
         );
         profileTweetSection.appendChild(profiletweetDiv);
      });

      // Grab the I tags
      UI.addExtras();

      UI.addLike();

      UI.addRetweet();

      UI.addComment();
   }



   // Display Tweets For Tweets and Reply Page
   static displayTweetsForTweetsRepliesFromLocalStorage() {
      const tweets = Storage.getTweetsFromLocalStorage();
      // Grab the name
      const name = Storage.getName();
      // Grab the Username
      const username = Storage.getUsername();

      // Loop Through all of them
      tweets.forEach((tweet) => {
         // Recreate what I did in the App.js (Home Page)
         const profileTweetRepliesDiv = document.createElement('div');
         profileTweetRepliesDiv.classList.add('profile-tweet');
         profileTweetRepliesDiv.innerHTML = `
            <div class="container">
               <div class="profile-tweet-head">
                  <a href="#">
                     <div class="name">
                        <img
                           class="rounded-img"
                           src="img/user-one.jpg"
                           alt=""
                        />
                        <h4>${name}</h4>
                        <p>@${username}</p>
                        <p>.15h</p>
                     </div>
                  </a>
                  <div>
                     <i class="fas fa-chevron-down chevron-down"></i>
                     <ul class="extra-options-closed">
                        <li>
                           <a class ="delete" href="#">
                              <i class="fas fa-trash "></i>
                              Delete
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fas fa-thumbtack"></i>
                              Pin To Your Profile
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fas fa-code"></i>
                              Embed Tweet
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fas fa-chart-bar"></i>
                              View Activity
                           </a>
                        </li>
                     </ul>
               </div>
            </div>
            <div class="profile-tweet-body">
               <div class="text">
                 ${tweet.tweet}
               </div>
               <div class="post-img">
                  <img src="img/user-one.jpg" alt="" />
               </div>

               <div class="profile-tweet-body-utilities">
                  <i class="fas fa-comment-alt comment"></i>
                  <i class="fas fa-retweet retweet"></i>
                  <i class="fas fa-heart like"></i>
                  <i class="fas fa-download"></i>
               </div>
            </div>
         </div>
         `;

         // Append to the Profile Tweet and Replies Div to the Profile Tweets and Replies Section in the HTML
         const profileTweetRepliesSection = document.querySelector(
            '.profile-tweet-replies-section'
         );
         profileTweetRepliesSection.appendChild(profileTweetRepliesDiv);
      });
   }

   // Display Tweets For Media Page
   static displayTweetsForMediaFromLocalStorage() {
      const tweets = Storage.getTweetsFromLocalStorage();
      // Grab the name
      const name = Storage.getName();
      // Grab the Username
      const username = Storage.getUsername();

      // Loop Through all of them
      tweets.forEach((tweet) => {
         // Recreate what I did in the App.js (Home Page)
         const profileMediaDiv = document.createElement('div');
         profileMediaDiv.classList.add('profile-tweet');
         profileMediaDiv.innerHTML = `
            <div class="container">
               <div class="profile-tweet-head">
                  <a href="#">
                     <div class="name">
                        <img
                           class="rounded-img"
                           src="img/user-one.jpg"
                           alt=""
                        />
                        <h4>${name}</h4>
                        <p>@${username}</p>
                        <p>.15h</p>
                     </div>
                  </a>
                  <div>
                     <i class="fas fa-chevron-down chevron-down"></i>
                     <ul class="extra-options-closed">
                        <li>
                           <a class ="delete" href="#">
                              <i class="fas fa-trash "></i>
                              Delete
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fas fa-thumbtack"></i>
                              Pin To Your Profile
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fas fa-code"></i>
                              Embed Tweet
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              <i class="fas fa-chart-bar"></i>
                              View Activity
                           </a>
                        </li>
                     </ul>
               </div>
            </div>
            <div class="profile-tweet-body">
               <div class="text">
                 ${tweet.tweet}
               </div>
               <div class="post-img">
                  <img src="img/user-one.jpg" alt="" />
               </div>

               <div class="profile-tweet-body-utilities">
                  <i class="fas fa-comment-alt comment"></i>
                  <i class="fas fa-retweet retweet"></i>
                  <i class="fas fa-heart like"></i>
                  <i class="fas fa-download"></i>
               </div>
            </div>
         </div>
         `;

         // Append to the Profile Tweet and Replies Div to the Profile Tweets and Replies Section in the HTML
         const profileMediaSection = document.querySelector(
            '.profile-media-section'
         );
         profileMediaSection.appendChild(profileMediaDiv);
      });
   }

   static addExtras() {
      const chevronsDown = document.querySelectorAll('.chevron-down');
      chevronsDown.forEach((chevronDown) => {
         chevronDown.addEventListener('click', (e) => {
            const extraOptions = e.target.nextElementSibling;
            extraOptions.classList.toggle('extra-options-open');
         });
      });
   }

      // Make the Like Color when the Heart Icon is clicked
      static addLike(){
         const hearts = document.querySelectorAll('.fa-heart');
         hearts.forEach(heart =>{
            heart.addEventListener('click', (e)=>{
               heart.classList.toggle('add-like');
            })
         })
      }
   
      // Make the Retweet Color when the Heart Icon is clicked
      static addRetweet(){
         const retweets = document.querySelectorAll('.fa-retweet');
         retweets.forEach(retweet =>{
            retweet.addEventListener('click', (e)=>{
               retweet.classList.toggle('add-retweet');
            })
         })
      }
   
      // Make the Comment Color when the Heart Icon is clicked
      static addComment(){
         const comments = document.querySelectorAll('.fa-comment-alt');
         comments.forEach(comment =>{
            comment.addEventListener('click', (e)=>{
               comment.classList.toggle('add-comment');
            })
         })
      }

   static displayTweetsPage(e) {
      // Add the Border to the Tweet Button
      const tweetBtn = e.target;
      tweetBtn.classList.add('current');
      tweetBtn.style.borderBottom = '2px solid #5da9dd';
      // // Make the Tweet & Replies Section, Media Section and Likes  display None;
      const tweetRepliesSection = document.querySelector(
         '.profile-tweet-replies-section'
      );
      const mediaSection = document.querySelector('.profile-media-section');
      const likesSection = document.querySelector('.profile-likes-section');
      tweetRepliesSection.style.display = 'none';
      mediaSection.style.display = 'none';
      likesSection.style.display = 'none';
      // Remove the Blue Border from Everything Else
      const tweetReplyBtn = document.querySelector('.tweets-replies-content');
      const mediaBtn = document.querySelector('.media-content');
      const likeBtn = document.querySelector('.likes-content');
      // // Remove The Class Of Current
      tweetReplyBtn.classList.remove('current');
      mediaBtn.classList.remove('current');
      likeBtn.classList.remove('current');
      // Remove The Border Bottom
      tweetReplyBtn.style.borderBottom = 'none';
      mediaBtn.style.borderBottom = 'none';
      likeBtn.style.borderBottom = 'none';
      // Make the Tweet Section Display Block
      const tweetSection = document.querySelector('.profile-tweet-section');
      tweetSection.style.display = 'block';
   }

   static displayTweetsRepliesPage(e) {
      // Add The Class Of Current
      const tweetReplyBtn = e.target;
      tweetReplyBtn.classList.add('current');
      tweetReplyBtn.style.borderBottom = '2px solid #5da9dd';
      // Make the Tweet Section, Media Section and Likes  display None;
      const tweetSection = document.querySelector('.profile-tweet-section');
      const mediaSection = document.querySelector('.profile-media-section');
      const likesSection = document.querySelector('.profile-likes-section');
      // Make Them Displayed None
      tweetSection.style.display = 'none';
      mediaSection.style.display = 'none';
      likesSection.style.display = 'none';
      // Remove the Blue Border below it
      const tweetBtn = document.querySelector('.tweet-content');
      const mediaBtn = document.querySelector('.media-content');
      const likeBtn = document.querySelector('.likes-content');
      // Remove the Class Of Current
      tweetBtn.classList.remove('current');
      mediaBtn.classList.remove('current');
      likeBtn.classList.remove('current');
      // // Remove The Border
      tweetBtn.style.borderBottom = 'none';
      mediaBtn.style.borderBottom = 'none';
      likeBtn.style.borderBottom = 'none';
      // Make The Tweet Replies Section Displayed Block
      const tweetRepliesSection = document.querySelector(
         '.profile-tweet-replies-section'
      );
      tweetRepliesSection.style.display = 'block';
   }

   static displayMediaPage(e) {
      // Add the Class of Current
      const mediaBtn = e.target;
      mediaBtn.classList.add('current');
      mediaBtn.style.borderBottom = '2px solid #5da9dd';
      // Make the Tweet Section, Tweet and Replies Section and Likes Section  display None;
      const tweetSection = document.querySelector('.profile-tweet-section');
      const tweetRepliesSection = document.querySelector(
         '.profile-tweet-replies-section'
      );
      const likesSection = document.querySelector('.profile-likes-section');
      // Display them as None
      tweetSection.style.display = 'none';
      tweetRepliesSection.style.display = 'none';
      likesSection.style.display = 'none';
      // Remove the Blue Border below Every Everything
      const tweetBtn = document.querySelector('.tweet-content');
      const tweetReplyBtn = document.querySelector('.tweets-replies-content');
      const likeBtn = document.querySelector('.likes-content');
      // Remove The Class Of Current
      tweetBtn.classList.remove('current');
      tweetReplyBtn.classList.remove('current');
      likeBtn.classList.remove('current');
      // Remove The Border Bottom
      tweetBtn.style.borderBottom = 'none';
      tweetReplyBtn.style.borderBottom = 'none';
      likeBtn.style.borderBottom = 'none';
      // Make Media Section Displayed Block
      const mediaSection = document.querySelector('.profile-media-section');
      mediaSection.style.display = 'block';
   }

   static displayLikesPage(e) {
      // Add the Class of Current
      const likeBtn = e.target;
      likeBtn.classList.add('current');
      likeBtn.style.borderBottom = '2px solid #5da9dd';
      // Make the Tweet Section, Tweet and Replies Section and Media Section  display None;
      const tweetSection = document.querySelector('.profile-tweet-section');
      const tweetRepliesSection = document.querySelector(
         '.profile-tweet-replies-section'
      );
      const mediaSection = document.querySelector('.profile-media-section');
      // Display them as None
      tweetSection.style.display = 'none';
      tweetRepliesSection.style.display = 'none';
      mediaSection.style.display = 'none';
      // Remove the Blue Border below Every Everything
      const tweetBtn = document.querySelector('.tweet-content');
      const tweetReplyBtn = document.querySelector('.tweets-replies-content');
      const mediaBtn = document.querySelector('.media-content');
      // Remove The Class Of Current
      tweetBtn.classList.remove('current');
      tweetReplyBtn.classList.remove('current');
      mediaBtn.classList.remove('current');
      // Remove The Border Bottom
      tweetBtn.style.borderBottom = 'none';
      tweetReplyBtn.style.borderBottom = 'none';
      mediaBtn.style.borderBottom = 'none';
      // Make Like Section Displayed Block
      const likeSection = document.querySelector('.profile-likes-section');
      likeSection.style.display = 'block';
   }

   static followBtnClicked(e) {
      // Make the Follow Btn Displayed None
      e.style.display = 'none';
      // Make the Followed Btn Displayed Block
      e.nextElementSibling.style.display = 'Block';
   }

   // Followed Btn Clicked
   static followedBtnClicked(e) {
      // Make the Followed Btn Displayed None
      e.style.display = 'none';
      // Make the Follow Btn Displayed Block
      e.previousElementSibling.style.display = 'Block';
   }

   // Display the Profile Extra
   static displayProfileExtras() {
      // Grab all I tags
      const chevronsDown = document.querySelectorAll(
         '.search-trends-extras .fa-chevron-down'
      );
      chevronsDown.forEach((chevronDown) => {
         chevronDown.addEventListener('click', (e) => {
            console.log('yes');
            const extraOptions = e.target.nextElementSibling;
            extraOptions.classList.toggle('search-trends-extras-options-open');
         });
      });
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

   static resaveProfile(formValues) {
      let formsValues;
      if (localStorage.getItem('profile value') === null) {
         formsValues = '';
      } else {
         formsValues = JSON.parse(localStorage.getItem('form values'));
      }

      formsValues = formValues;
      localStorage.setItem('profile values', JSON.stringify(formsValues));
   }

   // Grab Whatever is in Local Storage with the name of Tweet
   static getTweetsFromLocalStorage() {
      let tweets;
      if (localStorage.getItem('tweet') === null) {
         tweets = [];
      } else {
         tweets = JSON.parse(localStorage.getItem('tweet'));
      }
      return tweets;
   }
}

// Events and Selectors
document.addEventListener('DOMContentLoaded', UI.displayName());
document.addEventListener('DOMContentLoaded', UI.displayUsername());
document.addEventListener(
   'DOMContentLoaded',
   UI.displayTweetsFromLocalStorage()
);
document.addEventListener(
   'DOMContentLoaded',
   UI.displayTweetsForTweetsRepliesFromLocalStorage()
);
document.addEventListener(
   'DOMContentLoaded',
   UI.displayTweetsForMediaFromLocalStorage()
);
document.addEventListener('DOMContentLoaded', UI.displayProfileExtras);
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

   // Make the body Oveflow Hidden
   document.body.style.overflow = 'hidden';

   // Append the Form to the Body
   document.body.appendChild(editProfileSection);

   // Grab the Burger Class in it
   const closeBurger = document.querySelector('.close-profile-burger');
   closeBurger.addEventListener('click', () => {
      const darkOverlay = document.querySelector('.dark-overlay');
      darkOverlay.style.display = 'none';

      // Make the body Oveflow Visible
      document.body.style.overflow = 'visible';

      // Remove the Form to the Body
      document.body.removeChild(editProfileSection);
   });

   const saveProfileBtn = document.querySelector('.save-profile-btn');
   const nameInput = document.querySelector('#edit-name');
   const bioInput = document.querySelector('#edit-bio');
   const locationInput = document.querySelector('#edit-location');
   const websiteInput = document.querySelector('#edit-website');
   saveProfileBtn.addEventListener('click', (e) => {
      // Instatiate a new Form
      const formValues = new EditProfileForm(
         nameInput.value,
         bioInput.value,
         locationInput.value,
         websiteInput.value
      );

      // Storage to Local Storage
      Storage.resaveProfile(formValues);

      // Remove the Edit Profile Section
      const darkOverlay = document.querySelector('.dark-overlay');
      darkOverlay.style.display = 'none';

      // Make the body Oveflow Visible
      document.body.style.overflow = 'visible';

      document.body.removeChild(editProfileSection);

      // Change The Name in The UI
      UI.reNameProfile(formValues);
   });
});

// Function
// Tweet Btn
const tweetBtn = document.querySelector('.tweet-content');
tweetBtn.addEventListener('click', (e) => {
   UI.displayTweetsPage(e);
});

// Tweet and Replies Btn Function
const tweetRepliesBtn = document.querySelector('.tweets-replies-content');
tweetRepliesBtn.addEventListener('click', (e) => {
   UI.displayTweetsRepliesPage(e);
});

// Media Btn Function
const mediaBtn = document.querySelector('.media-content');
mediaBtn.addEventListener('click', (e) => {
   UI.displayMediaPage(e);
});

// Likes Btn Function
const likeBtn = document.querySelector('.likes-content');
likeBtn.addEventListener('click', (e) => {
   UI.displayLikesPage(e);
});

//Follow Function
const followBtns = document.querySelectorAll('.follow-interested-btn');
followBtns.forEach((followBtn) => {
   followBtn.addEventListener('click', followBtnClicked);

   function followBtnClicked(e) {
      UI.followBtnClicked(e.target);
   }
});

//Followed Function
const followedBtns = document.querySelectorAll('.followed-interested-btn');
followedBtns.forEach((followedBtn) => {
   followedBtn.addEventListener('click', followedBtnClicked);

   function followedBtnClicked(e) {
      UI.followedBtnClicked(e.target);
   }
});

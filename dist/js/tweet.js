// Tweet Form
class TweetBtnHeaderForm {
   constructor(tweet) {
      this.tweet = tweet;
   }
}

// UITweets Class
class UITweet {
   // Clear Input Fields
   static clearFields() {
      const tweetInput = document.querySelector('.tweet-btn-input input');
      tweetInput.value = '';
   }

   // Add Tweet to UI
   static addTweet(newTweet) {
      // Grab the name of the person
      const name = Storage.getName();

      // Grab the Username of the Person
      const username = Storage.getUsername();
      // Time Function
      const today = new Date();
      const hour = today.getHours();
      // Create a new Div
      const tweetDiv = document.createElement('div');
      tweetDiv.classList.add('tweet');
      tweetDiv.innerHTML = `
         <div class="container">
         <div class="tweet-head">
            <a href="#">
               <div class="name">
                  <img
                     class="rounded-img"
                     src="img/user-one.jpg"
                     alt=""
                  />
                  <h4>${name}</h4>
                  <p>@${username}</p>
                  <p>.${hour}h</p>
               </div>
            </a>
            <div>
               <i class="fas fa-chevron-down chevron-down"></i>
               <ul class="extra-options-closed">
                  <li>
                     <a href="#">
                        <i class="fas fa-angry"></i>
                        Not Interested
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <i class="fas fa-user-minus"></i>
                        Unfollow
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <i class="fas fa-list-alt"></i>
                        Add/Remove From Lists</a
                     >
                  </li>
                  <li>
                     <a href="#">
                        <i class="fas fa-volume-mute"></i>
                        Mute
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <i class="fas fa-exclamation-circle"></i>
                        Block
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <i class="fas fa-code"></i>
                        Block Embed Tweet
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <i class="fas fa-flag"></i>
                        Report Tweet
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div class="tweet-body">
            <div class="text">
               ${newTweet.tweet}
            </div>
            <div class="post-img">
               <img src="img/user-one.jpg" alt="" />
            </div>
            <div class="tweet-body-utilities">
               <i class="fas fa-comment-alt"></i>
               <i class="fas fa-retweet retweet"></i>
               <i class="fas fa-heart like"></i>
               <i class="fas fa-download"></i>
            </div>
         </div>
      </div>
         `;
      console.log(tweetDiv);
      //    // Append it to the Tweet Section in the HTML
      const tweetSection = document.querySelector('.tweet-section');
      tweetSection.appendChild(tweetDiv);
   }
}

class Store {
   static addTweetsFromLocalStorage(newTweet) {
      console.log('yes');
   }

   static addTweetsFromLocalStorage(newTweet) {
      let tweets;
      if (localStorage.getItem('tweet') === null) {
         tweets = [];
      } else {
         tweets = JSON.parse(localStorage.getItem('tweet'));
      }

      tweets.push(newTweet);
      localStorage.setItem('tweet', JSON.stringify(tweets));
   }
}

// Events

// Function
const tweetBtnHeader = document.querySelector('.tweet-btn button');
tweetBtnHeader.addEventListener('click', tweetBtnHeaderClicked);

function tweetBtnHeaderClicked(e) {
   // Create a Form
   const tweetForm = document.createElement('section');
   tweetForm.classList.add('tweet-btn-form');
   tweetForm.innerHTML = `
   <div class="tweet-btn-form-head">
      <div class="close-profile-burger">
         <div class="close-profile-burger-line-1"></div>
         <div class="close-profile-burger-line-2"></div>
         <div class="close-profile-burger-line-3"></div>
      </div>
      <h3>Unsent Tweets</h3>
   </div>
   <div class="tweet-btn-input">
      <div class="form">
         <div>
            <a href="profile.html">
               <img
                  class="rounded-img"
                  src="img/user-one.jpg"
                  alt=""
               />
            </a>
            <input type="text" placeholder="What's Happening?" />
         </div>
         <div class="tweet-btn-utilities">
            <div class="icons">
               <i class="fas fa-image"></i>
               <i class="fas fa-smile"></i>
               <i class="fas fa-calendar"></i>
            </div>
            <button disabled>
               <h4>Tweet</h4>
            </button>
         </div>
      </div>
   </div>
   `;

   // Make the body have the dark overlay
   const darkOverlay = document.querySelector('.dark-overlay');
   darkOverlay.style.display = 'block';

   // Make the body Oveflow Hidden
   document.body.style.overflow = 'hidden';

   // Append the Form to the Body
   document.body.appendChild(tweetForm);

   // Grab the Burger Class in it
   const closeBurger = document.querySelector('.close-profile-burger');
   closeBurger.addEventListener('click', () => {
      const darkOverlay = document.querySelector('.dark-overlay');
      darkOverlay.style.display = 'none';

      // Make the body Oveflow Visible
      document.body.style.overflow = 'visible';

      // Remove the Form to the Body
      document.body.removeChild(tweetForm);
   });

   // Instatiate Tweet Form

   const tweetInput = document.querySelector('.tweet-btn-input input');
   const tweetSubmitBtn = document.querySelector('.tweet-btn-input button');

   tweetInput.addEventListener('keyup', sumbitTweet);

   function sumbitTweet(e) {
      if (!tweetInput.value.length) {
         tweetSubmitBtn.disabled = true;
         tweetSubmitBtn.style.backgroundColor = '#b1d6ef';
      } else {
         tweetSubmitBtn.disabled = false;
         tweetSubmitBtn.style.backgroundColor = '#5DA9DD';
      }
   }

   // Grab the Tweet Form
   tweetSubmitBtn.addEventListener('click', formSubmitted);

   function formSubmitted(e) {
      const newTweet = new TweetBtnHeaderForm(tweetInput.value);
      console.log(newTweet);
      // Instatiate Tweet
      UITweet.addTweet(newTweet);

      // Save Tweets to Local storage
      Store.addTweetsFromLocalStorage(newTweet);

      // Clear Fields
      UITweet.clearFields();

      const darkOverlay = document.querySelector('.dark-overlay');
      darkOverlay.style.display = 'none';

      // Make the body Oveflow Visible
      document.body.style.overflow = 'visible';

      // Remove the Form to the Body
      document.body.removeChild(tweetForm);
   }
}

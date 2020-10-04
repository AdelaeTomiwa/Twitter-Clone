// Tweet Class
class Tweet {
   constructor(tweet) {
      this.tweet = tweet;
   }
}

// UI Class
class UI {
   // Display Old Tweets
   static getTweets() {
      const tweets = Storage.getTweetsFromLocalStorage();

      // Loop Through all of them
      tweets.forEach((tweet) => UI.addTweet(tweet));

      UI.addExtras();

      // // Bring in Menu to Tweets
      // const extraMenus = document.querySelectorAll('.extra');
      // // Convert to Array
      // extraMenus.forEach((extraMenu) => {
      //    extraMenu.addEventListener('click', () => {
      //       // Change the Icon to Cheron up
      //       extraMenu.classList.toggle('fa-chevron-up');
      //       // Grab the Ul and display it on the screen
      //       const options = document.querySelectorAll('.extra-options-closed');
      //       // Convert all to Array
      //       options.forEach((option) => {
      //          option.classList.toggle('extra-options-open');
      //       });
      //       // options.classList.toggle('extra-options-open');
      //    });
      // });
   }

   static addExtras() {
      // Grab all I tags
      const chevronsDown = document.querySelectorAll('.chevron-down');
      chevronsDown.forEach((chevronDown) => {
         chevronDown.addEventListener('click', (e) => {
            const extraOptions = e.target.nextElementSibling;
            extraOptions.classList.toggle('extra-options-open');
         });
      });
   }
   // Add Tweet to UI
   static addTweet(newTweet) {
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
               <h4>Cristiano Ronaldo</h4>
               <p>@cristiano</p>
               <p>.15h</p>
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
            <i class="fas fa-retweet"></i>
            <i class="fas fa-thumbs-up"></i>
            <i class="fas fa-download"></i>
         </div>
      </div>
   </div>
      `;

      // Append it to the Tweet Section in the HTML
      const tweetSection = document.querySelector('.tweet-section');
      tweetSection.appendChild(tweetDiv);
   }
   // Clear Input Fields
   static clearFields() {
      const tweetInput = document.querySelector('.tweet-input input');
      tweetInput.value = '';
   }
}

// Storage Class
class Storage {
   static getTweetsFromLocalStorage(newTweet) {
      let tweets;
      if (localStorage.getItem('tweet') === null) {
         tweets = [];
      } else {
         tweets = JSON.parse(localStorage.getItem('tweet'));
      }
      return tweets;
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

// Display Old Tweets
document.addEventListener('DOMContentLoaded', UI.getTweets);

// Add Tweet
// Selectors
const tweetForm = document.querySelector('.tweet-input form');
const tweetInput = document.querySelector('.tweet-input input');
const tweetSubmitBtn = document.querySelector('.tweet-input button');

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
   const newTweet = new Tweet(tweetInput.value);
   // Instatiate Tweet
   UI.addTweet(newTweet);

   // Save Tweets to Local storage
   Storage.addTweetsFromLocalStorage(newTweet);

   // Clear Fields
   UI.clearFields();
}

// Delete Tweet
// Bring in Menu to Tweets
// const extraMenu = document.querySelector('.extra');
// extraMenu.addEventListener('click', () => {
//    // Change the Icon to Cheron up
//    extraMenu.classList.toggle('fa-chevron-up');
//    // Grab the Ul and display it on the screen
//    const options = document.querySelector('.extra-options-closed');
//    options.classList.toggle('extra-options-open');
// });

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
            <i class="fas fa-chevron-down"></i>
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
            <i class="fas fa-smile"></i>
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

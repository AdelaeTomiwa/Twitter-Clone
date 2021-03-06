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

      UI.displaySearchExtras();

      UI.addLike();

      UI.addRetweet();

      UI.addComment();
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
            <i class="fas fa-comment-alt comment"></i>
            <i class="fas fa-retweet retweet"></i>
            <i class="fas fa-heart like"></i>
            <i class="fas fa-download"></i>
         </div>
      </div>
   </div>
      `;

      // Append it to the Tweet Section in the HTML
      const tweetSection = document.querySelector('.tweet-section');
      tweetSection.appendChild(tweetDiv);

      
     
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

   // Display the Search Tweets Extra
   static displaySearchExtras() {
      // Grab all I tags
      const chevronsDown = document.querySelectorAll(
         '.search-trends-extras .fa-chevron-down'
      );
      chevronsDown.forEach((chevronDown) => {
         chevronDown.addEventListener('click', (e) => {
            const extraOptions = e.target.nextElementSibling;
            extraOptions.classList.toggle('search-trends-extras-options-open');
         });
      });
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

// Display Old Tweets
document.addEventListener('DOMContentLoaded', UI.getTweets);
document.addEventListener('DOMContentLoaded', UI.displayUsername());
// document.addEventListener('DOMContentLoaded', UI.diplayTime());

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

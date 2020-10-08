// CLASS UI
class UI {
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
}

// Events
document.addEventListener('DOMContentLoaded', UI.displayProfileExtras);

// FUNCTIONS
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

// UI Class
class UI {
   static displayAllPage(e) {
      // Add the Border to the Tweet Button
      const allBtn = e.target;
      allBtn.classList.add('current');
      allBtn.style.borderBottom = '2px solid #5da9dd';
      // // Make the Mention  display None;
      const mentionSection = document.querySelector('.mention-section');
      mentionSection.style.display = 'none';
      // Remove the Blue Border from Everything Else
      const mentionBtn = document.querySelector('.notification-mention-btn');
      // Remove The Class Of Current
      mentionBtn.classList.remove('current');
      // Remove The Border Bottom
      mentionBtn.style.borderBottom = 'none';
      // Make the Tweet Section Display Block
      const allSection = document.querySelector('.all-section');
      allSection.style.display = 'block';
   }

   static displayMentionPage(e) {
      // Add the Class of Current
      const mentionBtn = e.target;
      mentionBtn.classList.add('current');
      mentionBtn.style.borderBottom = '2px solid #5da9dd';
      // Make the All Section display None;
      const allSection = document.querySelector('.all-section');
      // Display them as None
      allSection.style.display = 'none';
      // Remove the Blue Border below Every Everything
      const allBtn = document.querySelector('.notification-all-btn');
      // Remove The Class Of Current
      allBtn.classList.remove('current');
      // Remove The Border Bottom
      allBtn.style.borderBottom = 'none';
      // Make Mention Section Displayed Block
      const mentionSection = document.querySelector('.mention-section');
      mentionSection.style.display = 'block';
   }
}

// Events

// Function
// All Btn
const allBtn = document.querySelector('.notification-all-btn');
allBtn.addEventListener('click', (e) => {
   UI.displayAllPage(e);
});

// Mention Btn Function
const mentionBtn = document.querySelector('.notification-mention-btn');
mentionBtn.addEventListener('click', (e) => {
   UI.displayMentionPage(e);
});

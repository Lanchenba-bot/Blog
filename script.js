const navItems = document.querySelector('.nav-items');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const searchCancel = document.querySelector('.search-cancel');
searchButton.addEventListener('click', ()=>{
   navItems.classList.toggle('inactive');
   searchInput.classList.toggle('active');
   searchIcon.classList.toggle('inactive');
   searchCancel.classList.toggle('active');   
});


  
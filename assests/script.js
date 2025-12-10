// Mobile menu toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Search icon toggle (desktop + mobile)
const searchIconLi = document.querySelector('.search-icon');

searchIconLi.addEventListener('click', (e)=>{
  if(!searchIconLi.classList.contains('open')){
    searchIconLi.classList.add('open');
    searchIconLi.innerHTML = `
      <i class="fa fa-search"></i>
      <input type="text" placeholder="Search...">
      <button class="back-search">&times;</button>
    `;
  } else if(e.target.classList.contains('back-search')){
    searchIconLi.classList.remove('open');
    searchIconLi.innerHTML = `<i class="fa fa-search"></i>`;
  }
});

// Close button for mobile menu
const mobileClose = document.querySelector('.mobile-close');

mobileClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

// Hero search tabs
const tabs = document.querySelectorAll('.search-tabs .tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    // You can later implement switching search type here
    const target = tab.dataset.target;
    console.log("Selected search type:", target);
  });
});

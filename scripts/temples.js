const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();

const lastModifiedSpan = document.getElementById('lastModified');
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}
const hamburgerBtn = document.createElement('button');
hamburgerBtn.classList.add('hamburger');
hamburgerBtn.setAttribute('aria-label', 'Toggle navigation');
hamburgerBtn.textContent = '☰'; 

const nav = document.querySelector('nav');
const navList = nav.querySelector('ul');


nav.insertBefore(hamburgerBtn, navList);
hamburgerBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  hamburgerBtn.textContent = navList.classList.contains('active') ? '✖' : '☰';
});
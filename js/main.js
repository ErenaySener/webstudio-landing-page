const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');

const modalOpenBtn = document.querySelector('[data-modal-open]');
const modalBackdrop = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('.modal-close');

function lockPage() {
  document.body.style.overflow = 'hidden';
}

function unlockPage() {
  document.body.style.overflow = '';
}

function openMobileMenu() {
  mobileMenu.classList.add('is-open');
  lockPage();
}

function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
  unlockPage();
}

function openModal() {
  modalBackdrop.classList.add('is-open');
  lockPage();
}

function closeModal() {
  modalBackdrop.classList.remove('is-open');
  unlockPage();
}

menuToggle.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

modalOpenBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

modalBackdrop.addEventListener('click', event => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMobileMenu();
    closeModal();
  }
});

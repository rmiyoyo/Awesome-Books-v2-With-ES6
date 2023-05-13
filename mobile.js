function saveFormDataToLocalStorage() {
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('.email-box');
  const messageInput = document.querySelector('textarea[name="message"]');
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}
const handleClick = () => {
  const mobileNavMenu = document.querySelector('#mobile-nav-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  mobileNavMenu.classList.toggle('mobile-menu-inactive');
  mobileNavMenu.classList.toggle('mobile-menu');
  document.body.classList.toggle('menu-active');
  mobileMenuOverlay.classList.toggle('mobile-menu-overlay-active');
};
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#svg-menu').addEventListener('click', handleClick);
  document.querySelectorAll('.mobile-link, .disabled-button').forEach((button) => button.addEventListener('click', handleClick));
  const form = document.querySelector('#contact-form');
  const submitButton = document.querySelector('.contact-button');
  const nameInput = form.querySelector('input[name="name"]');
  const emailInput = form.querySelector('.email-box');
  const messageInput = form.querySelector('textarea[name="message"]');
  form.addEventListener('submit', (event) => {
    const email = emailInput.value.trim();

    if (email !== email.toLowerCase()) {
      const errorMessage = document.createElement('p');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = 'Email address must be in lowercase.';
      const existingErrorMessage = submitButton.nextElementSibling;
      if (existingErrorMessage && existingErrorMessage.classList.contains('error-message')) {
        existingErrorMessage.remove();
      }
      submitButton.insertAdjacentElement('afterend', errorMessage);
      event.preventDefault();
    } else {
      saveFormDataToLocalStorage();
    }
  });

  const savedFormData = localStorage.getItem('formData');

  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    nameInput.value = formData.name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }

  nameInput.addEventListener('change', saveFormDataToLocalStorage);
  emailInput.addEventListener('change', saveFormDataToLocalStorage);
  messageInput.addEventListener('change', saveFormDataToLocalStorage);
});

let inputForm = document.getElementById('input-email');
const form = document.querySelector('.newsletter-form form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  alert(`O e-mail: ${inputForm.value} foi cadastrado com sucesso!`);
});
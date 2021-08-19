const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', stringFn);

function stringFn(e) {
  if (e.target.value.length === Number(e.target.dataset.length)) {
    e.target.classList.add('valid');
    e.target.classList.remove(`invalid`);
    return;
  }
  e.target.classList.remove('valid');
  e.target.classList.add('invalid');
}

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', stringFn);
function updateClass(addClass, removeClass) {
  inputRef.classList.add(addClass);
  inputRef.classList.remove(removeClass);
}

function stringFn(e) {
  if (e.target.value.length === Number(e.target.dataset.length)) {
    updateClass('valid', 'invalid');
    return;
  }
  updateClass('invalid', 'valid');
}

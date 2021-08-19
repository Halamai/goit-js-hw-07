const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener(`input`, changeNameFn);

function changeNameFn({ target }) {
  if (target.value !== ``) {
    outputName.textContent = target.value;
    return;
  }
  outputName.textContent = `незнакомец`;
}

const tochangeText = document.querySelector(`#text`);
const tomoveSlider = document.querySelector(`#font-size-control`);

tomoveSlider.addEventListener(`input`, tochangeFontsize);
function tochangeFontsize({ target }) {
  if (target.value) {
    tochangeText.style.fontSize = `${Number(target.value)}px`;
  }
}

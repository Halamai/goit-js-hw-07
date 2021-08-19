const dataCount = {
  count: 0,

  increment() {
    this.count = this.count + 1;
  },

  decrement() {
    this.count = this.count - 1;
  },
};

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]',
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]',
);
const span = document.querySelector('#value');

buttonDecrement.addEventListener('click', decrementFn);
buttonIncrement.addEventListener('click', incrementFn);

function decrementFn() {
  dataCount.decrement();
  span.textContent = dataCount.count;
}

function incrementFn() {
  dataCount.increment();
  span.textContent = dataCount.count;
}

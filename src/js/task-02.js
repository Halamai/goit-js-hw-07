const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.createElement('ul');

const vegetables = ingredients.map(vegetable => {
  const vegetablesRef = document.createElement('li');
  vegetablesRef.textContent = vegetable;
  return vegetablesRef;
});

listRef.append(...vegetables);

document.body.prepend(listRef);

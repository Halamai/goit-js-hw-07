

const ulCateg = document.querySelector('#categories');
console.log('ulCateg', ulCateg.children);
console.log(`У списку ${ulCateg.children.length} категорії.`);
[...ulCateg.children].forEach(element => {
    console.log(element.querySelector('h2').textContent);
    console.log(element.querySelectorAll('li').length);
    
});
  



// const ulLiItemTitle = ulLiItem.querySelectorAll()

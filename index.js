let someArr =JSON.parse(localStorage.getItem('booklist'));
let bookList = someArr.slice();
let title = document.getElementById('bookTitle'),
    author = document.getElementById('authorName'),
    url = document.getElementById('bookImage'),
    plot = document.getElementById('descrip')
    submit = document.querySelector('.sub-btn'),
    leftDiv = document.querySelector('.left');
let postArr = [];

//dynamic part

//function for DOMContentloaded

function ready() {
    leftDiv.insertAdjacentHTML('afterbegin',`<ul class ='bookshow'></ul>`);
    let ulTag = document.querySelector('.bookshow');
    bookList.forEach(function (obj){
        ulTag.insertAdjacentHTML('afterbegin',`<button class='btn edit'>Edit</button>`);
        ulTag.insertAdjacentHTML('afterbegin',`<li>${obj['title']}`);
      })
      ulTag.insertAdjacentHTML('afterend',`<button>Add</button>`);
      console.log('READY!')
}
/*
document.querySelector('.edit').previousElementSibling.innerText
bookList.forEach(function (obj) {
  for(let key in obj){
		if(obj[key]=='The Four Winds'){
      console.log(key)
    }
  }
})
*/


//save book data to array and rewrite local storage
function bookData() {
    let postObjs = {};

    postObjs['title'] = title.value;
    postObjs['author'] = author.value;
    postObjs['url'] = url.value;
    postObjs['plot'] = plot.value;

    bookList.push(postObjs);

    localStorage.setItem('booklist',JSON.stringify(bookList));

    //console.log(localStorage.getItem('booklist'));
}

submit.addEventListener('click', bookData());
document.addEventListener('DOMContentLoaded', ready);

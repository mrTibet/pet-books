let someArr =JSON.parse(localStorage.getItem('booklist'));
let bookList = someArr.slice();
let title = document.getElementById('bookTitle'),
    author = document.getElementById('authorName'),
    url = document.getElementById('bookImage'),
    plot = document.getElementById('descrip'),
    titleEd = document.getElementById('title-ed'),
    authorEd = document.getElementById('author-ed'),
    urlEd = document.getElementById('url-ed'),
    plotEd = document.getElementById('descrip-ed')
    submit = document.querySelector('.sub-btn'),
    leftDiv = document.querySelector('.left');
let postArr = [];
let postObjs = {};
//let btnEdit = document.querySelectorAll('.btn-edit');


//dynamic part

//function for DOMContentloaded

function ready(arr) {
  if(leftDiv.firstElementChild){

    leftDiv.firstElementChild.remove();
    leftDiv.lastElementChild.remove();

    leftDiv.insertAdjacentHTML('afterbegin',`<ul class ='bookshow'></ul>`);
    let ulTag = document.querySelector('.bookshow');
    arr.forEach(function (obj){
        ulTag.insertAdjacentHTML('afterbegin',`<button class='btn btn-edit' onclick="editForm(event.target)" >Edit</button>`);
        ulTag.insertAdjacentHTML('afterbegin',`<li>${obj['title']}`);
      })
      leftDiv.insertAdjacentHTML('beforeend',`<button>Add</button>`);
  }else{
    leftDiv.insertAdjacentHTML('afterbegin',`<ul class ='bookshow'></ul>`);
    let ulTag = document.querySelector('.bookshow');
    arr.forEach(function (obj){
        ulTag.insertAdjacentHTML('afterbegin',`<button class='btn btn-edit' onclick="editForm(event.target)" >Edit</button>`);
        ulTag.insertAdjacentHTML('afterbegin',`<li>${obj['title']}`);
      })
      leftDiv.insertAdjacentHTML('beforeend',`<button>Add</button>`);
  }
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

//edit button function

/*let editForm = function (el) {
  if(document.querySelector('.form-add')){
    document.querySelector('.form-add').classList.add('inactive');
    document.querySelector('.form-edit').classList.add('active');
  }
  
  console.log(el.previousElementSibling.innerText)
  bookList.forEach(function (obj) {
    for(let key in obj){
      if(obj[key]==el.previousElementSibling.innerText){
        console.log(obj)
        postObjs = obj
        bookData(postObjs)
        /*
        title.value = obj['title']
        author.value = obj['author']
        url.value = obj['url']
        plot.value = obj['plot']
      }
    }
  })
}
*/



//save book data to array and rewrite local storage
let bookData = function(obj) {
    

  obj['title'] = title.value;
  obj['author'] = author.value;
  obj['url'] = url.value;
  obj['plot'] = plot.value;

    bookList.push(obj);

    localStorage.setItem('booklist',JSON.stringify(bookList));

    //document.querySelector('.form-add').reset();
    //console.log(localStorage.getItem('booklist'));
}

document.addEventListener('DOMContentLoaded', function(){ready(booklist)});

submit.addEventListener('click', function(){bookData(postObjs)});
submit.addEventListener('click', function(){ready(bookList)});

let someArr =JSON.parse(localStorage.getItem('booklist'));
let bookList = someArr.slice();
let title = document.getElementById('bookTitle'),
    author = document.getElementById('authorName'),
    url = document.getElementById('bookImage'),
    plot = document.getElementById('descrip'),
    titleEd = document.querySelector('.title-ed'),
    authorEd = document.querySelector('.author-ed'),
    urlEd = document.querySelector('.url-ed'),
    plotEd = document.querySelector('.descrip-ed')
    submit = document.querySelector('.sub-btn'),
    leftDiv = document.querySelector('.left');
let postArr = [];
let postObjs={};
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

//вытащить обьект из массива-изменить его-засунуть обратно в массив-обновить данные локал сторадж и динамической части
function editForm (el) {
  console.log(el.previousElementSibling.innerText)
  bookList.forEach(function (obj) {
    for(let key in obj){
      if(obj[key]==el.previousElementSibling.innerText){
        console.log(obj)
        console.log(bookList.indexOf(obj))
        

        title.value = obj['title']
        author.value = obj['author']
        url.value = obj['url']
        plot.value = obj['plot']

        postObjs = bookList.splice(bookList.indexOf(obj),1);
        //bookList.splice(bookList.indexOf(obj),1)
        //ready(bookList)
        //console.log(bookList)

      }
    }
  })
}



//save book data to array and rewrite local storage
function bookData (obj) {
    
  let arr = [];

  obj['title'] = title.value;
  obj['author'] = author.value;
  obj['url'] = url.value;
  obj['plot'] = plot.value;

    arr = bookList.concat(obj)
    console.log(arr)
    localStorage.setItem('booklist',JSON.stringify(arr));

    //document.querySelector('.form-add').reset();
    console.log(localStorage.getItem('booklist'));
}

document.addEventListener('DOMContentLoaded', function(){ready(booklist)});

submit.addEventListener('click', function(e){
  e.preventDefault();
  bookData(postObjs)});
//submit.addEventListener('click', function(){ready(bookList)});

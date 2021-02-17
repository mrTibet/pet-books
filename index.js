let someArr =JSON.parse(localStorage.getItem('booklist'));
let bookList = someArr.slice();
let title = document.getElementById('bookTitle'),
    author = document.getElementById('authorName'),
    url = document.getElementById('bookImage'),
    plot = document.getElementById('descrip')
    submit = document.querySelector('.sub-btn');


let postArr = [];

function bookData() {
    let postObjs = {};

    postObjs['title'] = title.value;
    postObjs['author'] = author.value;
    postObjs['url'] = url.value;
    postObjs['plot'] = plot.value;

    /*localStorage.setItem('',JSON.stringify(postObjs));
    postArr.push(JSON.parse(localStorage.getItem('')));*/

    postArr.push(postObjs);

    console.log(postArr);

    bookList.push(postArr[0]);
    console.log(bookList);

}

submit.addEventListener('click', bookData());


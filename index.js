let title = document.getElementById('bookTitle'),
    author = document.getElementById('authorName'),
    url = document.getElementById('bookImage'),
    plot = document.getElementById('descrip')
    submit = document.querySelector('.sub-btn');

submit.addEventListener('click', function() {
    localStorage.setItem('title', title.value)
    localStorage.setItem('author', author.value)
    localStorage.setItem('url', url.value)
    localStorage.setItem('plot', plot.value)    
})
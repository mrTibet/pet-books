const booklist = [
    {
        title: 'Saint X: A Novel',
        author: 'Alexis Schaitkin',
        url: 'https://m.media-amazon.com/images/I/51pMrW0+vcL.jpg',
        plot: 'Saint X is hypnotic. Schaitkins characters...are so intelligent and distinctive it feels not just easy, but necessary, to follow them. I devoured [it] in a day'
    },
    {
        title: 'The Four Winds',
        author: 'Kristin Hannah',
        url: 'https://images-na.ssl-images-amazon.com/images/I/512D7InYi7L._SX327_BO1,204,203,200_.jpg',
        plot: 'The Four Winds seems eerily prescient in 2021 . . . Its message is galvanizing and hopeful: We are a nation of scrappy survivors. We’ve been in dire straits before; we will be again. Hold your people close'
    }
];

localStorage.setItem('books',JSON.stringify(booklist));
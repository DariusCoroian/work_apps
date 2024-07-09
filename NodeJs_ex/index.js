const express = require('express');
var fs = require('fs');
var logger = fs.createWriteStream('logger.txt', {
    flags: 'a'
  })
const app = express();
const PORT = 5000;
app.use(express.json());
app.use((req,res,next) => {
    let data = `${req.method} http://localhost:${PORT}${req.url} ${Date.now()}\n`
console.log(data);
logger.write(data);
next();
})
app.put('/books/:id', [(req,res,next) => {
    const bookId = req.params.id
    const {title,author,publicationYear} = req.body
    const book = {
        id:bookId,
        title:title,
        author:author,
        publicationYear:publicationYear
    }
    if(!book.id || !book.author || !book.publicationYear || !book.title){
        const err = new Error();
        err.status=400;
        err.message="you need to have an id, title, author and also a publication year!!!"
        next(err)
    }
    else{
        req.book=book
        next()
    }
},  (req,res,next) => {
    const bookIndex = books.findIndex( (book) => {
        return book.id == req.book.id
    })
    if(bookIndex==-1){
        const err = new Error()
        err.status=404;
        err.message="the book you want to update does not exist!"
        next(err)
    }
    else{
        req.bookIndex=bookIndex
        next()
    }
    
}]
)
app.use((err, req, res, next) => {
        res.status(err.status).send({status:err.status, message:err.message})
})
let books = [
    {
        id:1,
        title:'title1',
        author:'author1',
        publicationYear:'2010'
    },
    {
        id:2,
        title:'title2',
        author:'author2',
        publicationYear:'2011'
    },
    {
        id:3,
        title:'title3',
        author:'author3',
        publicationYear:'2012'
    }
]

app.listen(
    PORT,
    () =>console.log(`Listening to http://localhost:${PORT}`)
)

app.get('/books', (req,res) => {
    res.status(200).send(books)
})

app.post('/books', (req, res) => {
    const {id,title,author,publicationYear} = req.body
    const book = {
        id:id,
        title:title,
        author:author,
        publicationYear:publicationYear
    }
    if(!book.id || !book.author || !book.publicationYear || !book.title){
        res.status(406).send({message: 'you need to have an id, title, author and also a publication year!!!'});
    }
    books.push(book);
    res.status(200).send('added the book');
})

app.put('/books/:id', (req,res) => {
    books[req.bookIndex] = req.book;
    res.status(200).send({message:"book updated succesfully"});
})

app.delete("/books/:id", (req,res) => {
    const bookId = req.params.id
    if(!bookId){
        res.status(406).send({message: "you need to have a book id"});
    }
    let bookIndex = books.findIndex( (book) => {
        return book.id == bookId
    })
    books.splice(bookIndex,1);
    res.status(200).send({message: "the book has been deleted"})
})
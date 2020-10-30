var soap = require('soap');
var url = 'http://localhost:8001/wsdl?wsdl';

var book = {id:1, name:"toto", isbn:5879, authorId:5, publish:"2020-05-06"};
var author = {id:1, firstName:"toto", lastName:"titi"}
soap.createClient(url, function(err, client) {
    if (err) throw err;
    //console.log(client.describe().PaperLibraryService.PaperLibrary);
    client.getAllBooks(null,function(err,res){
        if (err) throw err;
        console.log(res);
    });

    client.getBookById({id:1},function(err,res){
        if (err) throw err;
        console.log(res);
    });

    client.createBook({name:book.name, isbn:book.isbn, publish:book.publish, authorId:book.authorId},function(err,res){
        if (err) throw err;
        console.log(res);
    });

    client.updateBookById({id:book.id, name:book.name, isbn:book.isbn, publish:book.publish, authorId:book.authorId},function(err,res){
        if (err) throw err;
        console.log(res);
    });

    client.deleteBookById({id:1},function(err,res){
        if (err) throw err;
        console.log(res);
    });

    client.getAllAuthors(null,function(err,res){
        if (err) throw err;
        console.log(res);
    });

    client.getAuthorById({id:8},function(err,res){
        if (err) throw err;
        console.log(res);
    });

    client.createAuthor({firstName:author.firstName, lastName:author.lastName},function(err,res){
        if (err) throw err;
        console.log(res);
    });

    client.updateAuthorById({id:author.id, firstName:author.firstName, lastName:author.lastName},function(err,res){
        if (err) throw err;
        console.log(res);
    });

    client.deleteAuthorById({id:1},function(err,res){
        if (err) throw err;
        console.log(res);
    });
});
import * as soap from 'soap';
//TODO: use .env file for service url
var url = 'http://localhost:8001/wsdl?wsdl';

export default class SoapHelper{
    books = [];
    authors = [];

    constructor() {
        this.getAllAuthors();
        this.getAllBooks();
    };

    getAllBooks() {
        let result = null;
        soap.createClient(url, function(err, client) {
            if (err) throw err;
            client.getAllBooks(null,function(err,res){
                if (err) throw err;
                result = res;
            });
        })
        this.books = result;
    };

    getAllAuthors() {
        let result = null;
        soap.createClient(url, function(err, client) {
            if (err) throw err;
            client.getAllAuthors(null,function(err,res){
                if (err) throw err;
                result = res;
            });
        })
        this.authors = result;
    };


}
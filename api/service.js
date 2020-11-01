import * as bookRepository from './repository/books';
import * as authorRepository from './repository/authors';

export const service = {
    PaperLibraryService: {
        PaperLibrary: {
            // ***************************************************************
            //      Books
            // ***************************************************************
            getAllBooks: async function(args) {
                console.log('On demande Tous les livres ');
                return await bookRepository.findAll();
            },
            getBookById: async function(id) {
                console.log('On demande le livre ', id);
                return await bookRepository.findBookById(id);
            },
            createBook: async function(args) {
                console.log('On créé le livre ', args);
                return await bookRepository.createBook(args);
            },
            updateBookById: async function(args) {
                console.log('On update le livre ', args);
                return await bookRepository.updateBook(args);
            },
            deleteBookById: async function(id) {
                console.log('On delete le livre ', id);
                return await bookRepository.deleteBook(id);
            },


            // ***************************************************************
            //      Authors
            // ***************************************************************
            
            getAllAuthors: async function(args) {
                console.log('On demande tout les auteurs');
                return await authorRepository.findAll();
            },
            getAuthorById: async function(id) {
                console.log('On demande le auteur ', id);
                return await authorRepository.findAuthorById(id);
            },
            createAuthor: async function(args) {
                console.log('On créé le auteur ', args);
                return await authorRepository.createAuthor(args);
            },
            updateAuthorById: async function(args) {
                console.log('On update le auteur ', args);
                return await authorRepository.updateAuthor(args);
            },
            deleteAuthorById: async function(id) {
                console.log('On delete le auteur ', id);
                return await authorRepository.deleteAuthor(id);
            },
            
        }
    }
};
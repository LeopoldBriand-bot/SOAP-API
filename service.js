export const service = {
    PaperLibraryService: {
        PaperLibrary: {
            // ***************************************************************
            //      Books
            // ***************************************************************
            getAllBooks: function(args) {
                console.log('On demande tout les livres');
                return [{id:1, name:"toto", isbn:5879, authorId:5, publish:"2020-05-06"}];
            },
            getBookById: function(id) {
                console.log('On demande le livre ', id);
                return {id:1, name:"toto", isbn:5879, authorId:5, publish:"2020-05-06"};
            },
            createBook: function(args) {
                console.log('On créé le livre ', args);
                return {id:1, name:"toto", isbn:5879, authorId:5, publish:"2020-05-06"};
            },
            updateBookById: function(args) {
                console.log('On update le livre ', args);
                return {id:1, name:"toto", isbn:5879, authorId:5, publish:"2020-05-06"};
            },
            deleteBookById: function(id) {
                console.log('On delete le livre ', id);
                return {id:1, name:"toto", isbn:5879, authorId:5, publish:"2020-05-06"};
            },


            // ***************************************************************
            //      Authors
            // ***************************************************************
            
            getAllAuthors: function(args) {
                console.log('On demande tout les auteurs');
                return [{id:1, firstName:"toto", lastName:"titi"}];
            },
            getAuthorById: function(id) {
                console.log('On demande le auteur ', id);
                return {id:1, firstName:"toto", lastName:"titi"};
            },
            createAuthor: function(args) {
                console.log('On créé le auteur ', args);
                return {id:1, firstName:"toto", lastName:"titi"};
            },
            updateAuthorById: function(args) {
                console.log('On update le auteur ', args);
                return {id:1, firstName:"toto", lastName:"titi"};
            },
            deleteAuthorById: function(id) {
                console.log('On delete le auteur ', id);
                return {id:1, firstName:"toto", lastName:"titi"};
            },
            
        }
    }
};
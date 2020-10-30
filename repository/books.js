import Book from '../models/book';
export const findAll = async () => {
    const books = await Book.findAll();
    console.log("All books:", JSON.stringify(books, null, 4));
    return books;
}

export const findBookById = async (id) => {
    const book = await Book.findAll({
        where: {
            id: id
        }
    });
    console.log("Book:", JSON.stringify(book, null, 4));
    return book;
}

export const createBook = async (book) => {
    const newBook = await Book.create({ name: book.name, isbn: book.isbn, publish: book.publish, authorId: book.authorId});
    console.log("Auto-generated book:", JSON.stringify(book, null, 4));
    return newBook;
}

export const deleteBook = async (id) => {
    const deleted = await Book.destroy({
        where: {
            id: id
        }
    })
    console.log("Deleted book:", deleted);
    return deleted;
}

export const updateBook = async (book) => {
    const updated = await Book.update(book, {
        where: {
            id: book.id
        }
    })
    console.log("Updated book:", updated);
    return updated;
}
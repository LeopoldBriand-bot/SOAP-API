import Author from '../models/author';

export const findAll = async () => {
    const authors = await Author.findAll();
    console.log("All authors:", JSON.stringify(authors, null, 4));
    return authors;
}

export const findAuthorById = async (id) => {
    const author = await Author.findAll({
        where: {
            id: id
        }
    });
    console.log("Author:", JSON.stringify(author, null, 4));
    return author;
}

export const createAuthor = async (author) => {
    const newAuthor = await Author.create({ firstName: author.firstName, lastName: author.lastName});
    console.log("Auto-generated author:", JSON.stringify(author, null, 4));
    return newAuthor;
}

export const deleteAuthor = async (id) => {
    const deleted = await Author.destroy({
        where: {
            id: id
        }
    })
    console.log("Deleted author:", deleted);
    return deleted;
}

const updateAuthor = async (author) => {
    const updated = await Author.update(author, {
        where: {
            id: author.id
        }
    })
    console.log("Updated author:", updated);
    return updated;
}
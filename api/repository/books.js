import db from '../models'

export async function findAll() {
    try {
        const result = await db.Book.findAll();

        return result.map(el => {
            return {id:el.dataValues.id, 
                name:el.dataValues.name, 
                isbn:el.dataValues.isbn, 
                publish:el.dataValues.publish.toString(), 
                authorId:el.dataValues.authorId
            };
        });
    } catch(e) {
        console.log(e);
    };
}

export async function findBookById(args) {
    const book = await db.Book.findAll({
        where: {
            id: args.id
        }
    });
    if(book[0]){
        return {id:book[0].id, 
            name:book[0].dataValues.name, 
            isbn:book[0].dataValues.isbn, 
            publish:book[0].dataValues.publish.toString(), 
            authorId:book[0].dataValues.authorId
        };
    }
}

//TODO: Make it works
export async function createBook(args) {
    try{ 
        const author = await db.Book.create({
            name: args.firstName,
            isbn: args.lastName,
            authorId: args.authorId,
            publish: new Date()
        })
        return {
            id : author.dataValues.id,
            name: author.dataValues.name,
            isbn: author.dataValues.isbn, 
            publish: author.dataValues.publish.toString(),
        }
    } catch(e) {
        console.log(e)
    }
}

export async function deleteBook (args) {
    const deleted = await db.Book.destroy({
        where: {
            id: args.id
        }
    })
    console.log("Deleted book:", deleted);
    return {
        id : args.id,
        status: deleted
    }
}

//TODO: Make it works
export async function updateBook(book) {
    const updated = await db.Book.update(book, {
        where: {
            id: book.id
        }
    })
    console.log("Updated book:", updated);
    return updated;
}
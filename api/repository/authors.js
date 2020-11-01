import db from '../models'

export async function findAll() {
    try {
        const result = await db.Author.findAll();

        return result.map(el => {
            return {id:el.dataValues.id, 
                firstName:el.dataValues.firstName, 
                lastName:el.dataValues.lastName, 
            };
        });
    } catch(e) {
        console.log(e);
    };
}

export async function findAuthorById(args) {
    const author = await db.Author.findAll({
        where: {
            id: args.id
        }
    });
    if(author[0]){
        return {id:author[0].id, 
            firstName:author[0].dataValues.firstName, 
            lastName:author[0].dataValues.lastName, 
        };
    }
}

export async function createAuthor(args) {
    try{ 
        const author = await db.Author.create({
            firstName: args.firstName,
            lastName: args.lastName
        })
        return {
            id : author.dataValues.id,
            firstName: author.dataValues.firstName,
            lastName: author.dataValues.lastName
        }
    } catch(e) {
        console.log(e)
    }
}

export async function deleteAuthor(args) {
    const deleted = await db.Author.destroy({
        where: {
            id: args.id
        }
    })
    console.log("Deleted author:", deleted);
    return {
        id : args.id,
        status: deleted
    }
}

//TODO: Make it works
export async function updateAuthor(author) {
    const updated = await db.Author.update(author, {
        where: {
            id: author.id
        }
    })
    console.log("Updated author:", updated);
    return updated;
}
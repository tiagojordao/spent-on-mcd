const { db_open } = require('../database/initDB');

async function insertPerson(person) {
    try {
        var db = await db_open();
        try {
            const personResult = await db.run(
                "INSERT INTO Person (name) VALUES (?)", [person.name]
            )
            return {
                message: "Person Added!"
            }
        } catch(e) {
            return {
                message: 'Something went wrong!',
                error: e
            }
        }
    } catch(e) {
        return DB_ERROR_OBJ(e)
    } finally {
        db.close();
    }
}

async function getPerson(person) {
    try {
        var db = await db_open();
        try {
            const personResult = await db.get(
                "SELECT * FROM Person WHERE name=?", [person.name]
            )
            return personResult;
        } catch(e) {
            return {
                message: 'Something went wrong!',
                error: e
            }
        }
    } catch(e) {
        return DB_ERROR_OBJ(e)
    } finally {
        db.close();
    }
}

async function getPeople() {
    try {
        var db = await db_open();
        try {
            const personResult = await db.all(
                "SELECT * FROM Person"
            )
            return personResult;
        } catch(e) {
            return {
                message: 'Something went wrong!',
                error: e
            }
        }
    } catch(e) {
        return DB_ERROR_OBJ(e)
    } finally {
        db.close();
    }
}

module.exports = {
    insertPerson,
    getPerson,
    getPeople
}

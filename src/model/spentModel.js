const { db_open } = require('../database/initDB');

async function insertSpent(spent) {
    try {
        var db = await db_open();
        try {
            const spentResult = await db.run(
                "INSERT INTO Spent (p_name, spent) VALUES (?,?)", [spent.p_name, spent.spent]
            )
            return {
                message: "Spent Added!"
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

async function listSpentByPerson(person) {
    try {
        var db = await db_open();
        try {
            const personResult = await db.all(
                "SELECT * FROM Spent WHERE p_name=?", [person.name]
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

async function getSpentByPerson(person) {
    try {
        var db = await db_open();
        try {
            const personResult = await db.all(
                "SELECT * FROM Spent WHERE p_name=?", [person.name]
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
    insertSpent,
    listSpentByPerson,
    getSpentByPerson
}
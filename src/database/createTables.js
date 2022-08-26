const { db_open } = require('./initDB');

function createPersonTable() {
    db_open().then((db) => {
        db.exec(
            "CREATE TABLE IF NOT EXISTS 'Person' (" +
            " `name` VARCHAR(45) NOT NULL," +
            "PRIMARY KEY ('name'))"
        );
    });
}

function createSpentTable() {
    db_open().then((db) => {
        db.exec(
            "CREATE TABLE IF NOT EXISTS `Spent` (" +
            " `ID` INTEGER NOT NULL PRIMARY KEY," +
            " `p_name` VARCHAR(45) NOT NULL," +
            " `spent` FLOAT NOT NULL," +
            "FOREIGN KEY (`p_name`) REFERENCES `Person` (`name`))"
        );
    });
}

function createTables() {
    createPersonTable();
    createSpentTable();
}

module.exports = {
    createTables
}
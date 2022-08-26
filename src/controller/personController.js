const PersonModel = require('../model/personModel');

async function addPerson(req, res) {
    const person = await PersonModel.insertPerson(req.body);
    if(!person.error) {
        return res.json ({
            statusCode: 200,
            person
        });
    } else {
        return res.json ({
            statusCode: 400,
            person
        });
    }
}

async function getPersonByName(req, res) {
    const person = await PersonModel.getPerson(req.body);
    if(!person.error) {
        return res.json ({
            statusCode: 200,
            person
        });
    } else {
        return res.json ({
            statusCode: 400,
            person
        });
    }
}

async function getPeople(req, res) {
    const person = await PersonModel.getPeople();
    if(!person.error) {
        return res.json ({
            statusCode: 200,
            person
        });
    } else {
        return res.json ({
            statusCode: 400,
            person
        });
    }
}

module.exports = {
    addPerson,
    getPersonByName,
    getPeople
}
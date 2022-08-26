const { Router } = require('express');

const { addPerson, getPersonByName, getPeople } = require('../controller/personController');
const { addSpent, listSpentByName, getSpentByName } = require('../controller/spentController');

const routes = Router();

routes.get('/', (req, res) => {
    res.json({
        statusCode: 200,
        message: 'Server is Running!'
    });
});

routes.post('/person', addPerson);
routes.get('/person', getPersonByName);
routes.get('/people', getPeople);

routes.post('/spent', addSpent);
routes.get('/listspent', listSpentByName);
routes.get('/totalspent', getSpentByName);

module.exports = routes;
const SpentModel = require('../model/spentModel');


async function addSpent(req, res) {
    const spent = await SpentModel.insertSpent(req.body);
    if(!spent.error) {
        return res.json ({
            statusCode: 200,
            spent
        });
    } else {
        return res.json ({
            statusCode: 400,
            spent
        });
    }
}

async function listSpentByName(req, res) {
    const spent = await SpentModel.listSpentByPerson(req.body);
    if(!spent.error) {
        return res.json ({
            statusCode: 200,
            spent
        });
    } else {
        return res.json ({
            statusCode: 400,
            spent
        });
    }
}

async function getSpentByName(req, res) {
    const spent = await SpentModel.getSpentByPerson(req.body);
    if(!spent.error) {
        var total = 0;
        spent.forEach(e => {
            total += e.spent;
        });
        return res.json ({
            name: req.body.name,
            total
        });
    } else {
        return res.json ({
            statusCode: 400
        });
    }
}

module.exports = {
    addSpent,
    listSpentByName,
    getSpentByName
}

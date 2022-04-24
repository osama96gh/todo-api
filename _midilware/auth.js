const { is } = require('express/lib/request');
const jwt = require('jsonwebtoken');

function authunticat(req, res, next) {

    try {
        bearrerToken = req.header('authorization');
        token = bearrerToken.split(' ')[1];
        payload = jwt.verify(token, process.env.Secret_key)
        req.account = payload
        next()
    }
    catch (err) {
        console.error(err)
        return res.status(401).send('Unauthorized')
    }

}

module.exports = authunticat;
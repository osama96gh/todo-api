const express = require("express");
const router = express.Router();
const db = require('../_helpers/db');

router.post('/login', login)
router.post('/register', register)

module.exports = router;

async function login(req, res) {
    const { email, password } = req.body;
    let account = await db.Accoutnt.findOne({  email })

    if (!account) {
        return res.send('account not found');
    }
    if (account.password != password) {
        console.error(account.password+" "+pass);
        return res.send('password mismatch')

    }

    return res.send(account)

}

async function register(req, res) {

    if (await db.Accoutnt.findOne({ email: req.body.email })) {
        return res.send('email already registered')
    }

    const account = new db.Accoutnt(req.body);
    try {
        await account.save();

    }catch (e){
        return res.send(e)
    }

    res.send('account created successfuly')


}
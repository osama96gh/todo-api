const express = require("express");
const router = express.Router();
const db = require('../_helpers/db');

router.get('/all', getAll)
router.post('/add', add)

module.exports = router;

function getAll(req, res) {

}

async function add(req, res) {
    let todo = new db.Todo(req.body)

    try {
        res.send(await todo.save());
    } catch (err) {
        res.send(err)
    }
}
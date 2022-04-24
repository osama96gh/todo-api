const express = require("express");
const { Todo } = require("../_helpers/db");
const router = express.Router();
const db = require('../_helpers/db');
const todoModel = require("./todo.model");
const authunticat = require("../_midilware/auth");

router.get('/all', authunticat,getAll)
router.post('/add', add)
router.delete('/:id', del)

module.exports = router;

async function getAll(req, res) {

    try {
        res.send(req.user)
        let todos = await db.Todo.find().where({"user_id": req.user})
        res.send(todos);

    } catch (err) {
        res.status(500).send(err.message)
    }

}

async function add(req, res) {

    let todo = new db.Todo(req.body)

    try {
        res.send(await todo.save());
    } catch (err) {
        res.send(err)
    }
}

async function del(req, res) {
    try {
        if (await Todo.exists(req.body) && req.body._id) {

            res.status(204).send(await db.Todo.deleteOne(req.body))
        } else {
            res.status(404).send('can not find the item');
        }
    } catch (err) {
        res.status(500).send(err);

    }

}
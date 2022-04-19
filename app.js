require('dotenv').config()
const express = require("express");
const req = require('express/lib/request');
const loginRouter = require('./accounts/accounts.controller')
const db = require('./_helpers/db')

const app = express()
app.use(express.json())

//register routers
app.use(loginRouter)

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

app.listen(port, () => {
    console.log(`app listinging at prot ${port}`)
})
const { default: mongoose } = require("mongoose");

mongoose.connect(process.env.DB_URL, err => {

    if (err) {
        console.log('fial to connect to the db:\n ' + err)
        return;
    }
    console.log('connected to the database')
})


module.exports = {
    Accoutnt: require('../accounts/accounts.model'),
    Todo: require('../todos/todo.model',),
}
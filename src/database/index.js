const mongoose = require('mongoose')



// conectando ao bd
function connect() {
    mongoose.set('strictQuery', true)

    mongoose.connect('mongodb://0.0.0.0:27017/')
    const db = mongoose.connection


    db.once('open', () => {
        console.log('connected to dataBase')
    })

    db.on('error', console.error.bind(console, "connection error"))
}

module.exports = {
    connect
}
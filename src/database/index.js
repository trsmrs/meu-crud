const mongoose = require("mongoose")



function connect() {

    mongoose.set('strictQuery', true)
    mongoose.connect('mongodb://0.0.0.0:27017/projeto-crud')

    const db = mongoose.connection


    db.once('open', () => {
        console.log('connectado ao bando de dados')
    })

    db.on('error', console.error.bind(console, 'connection error: '))

}



module.exports = {
    connect
}
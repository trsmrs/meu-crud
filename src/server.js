const express = require('express')
const path = require('path')
const db = require('./database')
const routes = require('./routes')
const app = express()


// conexao com o banco de dados
db.connect()


// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname,'public')))

// habilitando server para receber dados via post
app.use(express.urlencoded({ extended: true }))


// definindo as rotas
app.use('/', routes)


// executando o servidor
const port = process.env.PORT || 7070

app.listen(port, console.log(`Server is running on port ${port}`))
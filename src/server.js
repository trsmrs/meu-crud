const express = require('express')
const path = require('path')


const db = require('./database')
const routes = require('./routes')
const app = express()


// conexão com o banco de dados.
db.connect()


app.use(express.urlencoded({ extended: false}))



// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))


// chamando as rotas
 app.use('/', routes)
//  app.use('/api', routes.api)
//  app.use('/blog', routes.blog)


// Abrindo a conexão com o servidor.
const port = process.env.PORT || 8080
app.listen(port, console.log(`Server is running on port ${port}`))
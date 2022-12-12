const express = require('express')
const path = require('path')

const app = express()

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos publicos
app.use(express.static(path.join(__dirname,'public')))

// habilitando server para receber dados via post
app.use(express.urlencoded({ extended: true }))


// rotas

app.get('/', (req, res)=>{
    res.render('index',{
        title: 'Página Inicial'
    })
})


// 404 error
app.use((req, res)=>{
    res.send('Página não encontrada!!')
})


// executando o servidor
const port = process.env.PORT || 7070

app.listen(port, console.log(`Server is running on port ${port}`))
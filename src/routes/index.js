const router = require('express').Router()






// rotas

router.get('/', (req, res)=>{
    res.render('index',{
        title: 'Página Inicial'
    })
})


// 404 error
router.use((req, res)=>{
    res.send('Página não encontrada!!')
})


module.exports = router
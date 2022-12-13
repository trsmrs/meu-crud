
const router = require('express').Router()

const CustomersController = require('../controllers/customers')


router.get('/', (req, res)=>{
    res.render('index',{
        title: 'Página Inicial'
    })
})


router.get('/register', (req, res)=>{
    res.render('register',{
        title: 'Página de Clientes'
    })
})

router.post('/register/add', CustomersController.add)


// 404 not found
router.use((req, res)=>{
    res.send('Página not Encontred!')
})












module.exports = router




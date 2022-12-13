const router = require('express').Router()


// const AuthController = require('../controllers/auth')
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')


// rotas
router.get('/', IndexController.index)


//  registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)


//  Listar
router.get('/list', CustomersController.listUsers)





// editar
router.get('/edit', CustomersController.indexEdit)
router.post('/edit/:id', CustomersController.edit)


// remover
router.get('/remove/:id', CustomersController.remove)


// 404 not found
router.use((req, res)=>{
    res.send('Página not Encontred!')
})












module.exports = router




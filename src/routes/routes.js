const router = require('express-promise-router')()
const UserController = require('../app/controllers/UserController')

router.get('/', (req,res) => {
    return res.status(200).send({
        success: 'true',
        message: 'Node.js, Express and Postgres API'
    })
})

//Auth routes
router.post('/register', UserController.register)

router.post('/authenticate', UserController.authenticate)

router.put('/forgot_password', UserController.forgot_password)


module.exports = router
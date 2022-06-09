const Router = require('express')
const router = new Router()
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

const typeController = require('../controllers/typeController')

router.post('/',checkRoleMiddleware('ADMIN') , typeController.create)
router.get('/', typeController.getAll)

module.exports = router
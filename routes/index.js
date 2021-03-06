const { Router } = require('express');
const userController = require('../app/controllers/user');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

const router = require('express').Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
    const nameToUpperCase = require('../middleware/nameToUpperCase');
router.post('/register', nameToUpperCase, register);


module.exports = router;

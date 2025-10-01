const router = require('express').Router();
const { protect } = require('../middleware/auth');

// importăm funcțiile din userController
const { listUsers, changeRole, searchByName } = require('../controllers/userController');

// 📋 listare utilizatori
router.get('/', protect, listUsers);

// 🔍 căutare după nume
router.get('/search', protect, searchByName);

// 🔑 schimbare rol
router.put('/:id/role', protect, changeRole);

module.exports = router;

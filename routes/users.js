const router = require('express').Router();
const { protect, admin } = require('../middleware/auth');
const { listUsers, changeRole } = require('../controllers/userController');

router.get('/', protect, admin, listUsers);
router.put('/:id/role', protect, admin, changeRole);

module.exports = router;

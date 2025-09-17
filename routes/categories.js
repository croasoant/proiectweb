const router = require('express').Router();
const { protect, admin } = require('../middleware/auth');
const { list, create } = require('../controllers/categoryController');

router.get('/', list);
router.post('/', protect, admin, create);

module.exports = router;

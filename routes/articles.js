const router = require('express').Router();
const { protect } = require('../middleware/auth');
const { list, get, create, update, remove } = require('../controllers/articleController');

router.get('/', list);
router.get('/:id', get);
router.post('/', protect, create);
router.put('/:id', protect, update);
router.delete('/:id', protect, remove);

module.exports = router;

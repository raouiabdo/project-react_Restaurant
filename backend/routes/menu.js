const express = require('express');
const { getMenus, createMenu, updateMenu, deleteMenu } = require('../controllers/menuController');
const adminMiddleware = require('../middleware/admin');
const router = express.Router();

router.get('/', getMenus);
router.post('/', adminMiddleware, createMenu);
router.put('/:id', adminMiddleware, updateMenu);
router.delete('/:id', adminMiddleware, deleteMenu);

module.exports = router;

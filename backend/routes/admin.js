const express = require('express');
const router = express.Router();
const { verifyAdmin } = require('../middleware/admin');
const {
  getAllUsers,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getAllOrders,
  updateOrderStatus,
} = require('../controllers/adminController');

// Middleware pour protéger les routes admin
router.use(verifyAdmin);

// Gestion des utilisateurs
router.get('/users', getAllUsers); // Récupérer tous les utilisateurs

// Gestion des menus
router.post('/menu', createMenuItem); // Créer un nouvel item dans le menu
router.put('/menu/:id', updateMenuItem); // Mettre à jour un item de menu
router.delete('/menu/:id', deleteMenuItem); // Supprimer un item de menu

// Gestion des commandes
router.get('/orders', getAllOrders); // Récupérer toutes les commandes
router.put('/orders/:id', updateOrderStatus); // Mettre à jour le statut d'une commande

module.exports = router;

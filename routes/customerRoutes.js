const express = require('express');
const { GetAllCustomers, AddCustomer, UpdateCustomerById, DeleteCustomerById, GetCustomerById } = require('../controllers/customerController');
const router = express.Router();

router.get('/customers', GetAllCustomers);
router.post('/customers', AddCustomer);
router.get('/customers/:id', GetCustomerById);
router.put('/customers/:id', UpdateCustomerById);
router.delete('/customers/:id', DeleteCustomerById);

module.exports = router; 


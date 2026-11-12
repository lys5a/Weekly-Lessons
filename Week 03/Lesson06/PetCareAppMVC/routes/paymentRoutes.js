const express = require('express');
const paymentController = require('../controllers/paymentController');

const router = express.Router();

router.get('/prepare/:serviceId', paymentController.preparePayment);

router.post(
   '/payments/mock/:serviceId',
   paymentController.createMockPayment
 );

module.exports = router;

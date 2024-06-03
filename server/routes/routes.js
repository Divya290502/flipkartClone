import express from 'express';
import { userLogin, userSignup } from '../controller/user-controller.js';
import { getProducts, getProductByID } from '../controller/product-controller.js';
import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';

const router = express.Router();

router.post('/signup', userSignup);

router.post('/login', userLogin);

router.get('/products', getProducts);

router.get('/product/:id', getProductByID);

router.post('/payment', addPaymentGateway)

router.post('/callback', paymentResponse);
export default router;
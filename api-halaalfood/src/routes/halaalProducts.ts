import express from 'express';
import controller from '../controllers/halaalProducts';

const router = express.Router();
router.get('/halaalProducts', controller.getHalaalProducts);

export = router;
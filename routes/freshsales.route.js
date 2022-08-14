const router = require('express').Router();
const freshsalesController = require('./../controllers/freshsales.controller');

router.get('/getContact', freshsalesController.getContact);
router.post('/createContact', freshsalesController.createContact);
router.post('/updateContact', freshsalesController.updateContact);
router.post('/deleteContact', freshsalesController.deleteContact);

module.exports = router;

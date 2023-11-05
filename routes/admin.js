const express = require('express');
const path = require('path');
const router = express.Router();
const adminControl = require('../controller/admincontroller');

router.get('/',adminControl.bookingapp);
 router.get('/bookingstatus',adminControl.status)
router.post('/register',adminControl.getregister,)
router.get('/get-data',adminControl.getData)



module.exports = router;
//
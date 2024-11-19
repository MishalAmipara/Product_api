var express = require('express');
var auth = require('../controller/authcontroller');
var router = express.Router();


router.post('/Register',auth.Register_user);
router.post('/login',auth.login);
router.get('/',auth.get_register_user);



module.exports = router;

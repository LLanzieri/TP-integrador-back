const express = require('express');
const router = express.Router();

let controller_mail = require('../controllers/controller_mail');


// localhost/mail
router.post('/', controller_mail.envioMail);

module.exports = router;
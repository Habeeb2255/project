const express = require("express");
const router = express.Router();


const authnticate = require('./authnticate');



router.use([authnticate]);


module.exports = router;
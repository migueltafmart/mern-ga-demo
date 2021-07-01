const {getHome} = require('../api');
const router = require('express').Router();
router.get('/', getHome)
module.exports = router;
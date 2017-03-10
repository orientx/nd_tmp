var express = require('express');
var router = express.Router();

router.get('/p1', function(req, res){
    res.send('customer Router p1');
})
router.get('/p2', function(req, res){
    res.send('customer Router p2');
})

module.exports = router;

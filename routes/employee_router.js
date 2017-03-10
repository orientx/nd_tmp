module.exports = function(app) {
    var express = require('express');
    var router = express.Router();

    router.get('/', function(req, res) {
        res.send('employee index page');
    })

    router.get('/p1', function(req, res) {
        res.send('employee Router p1');
    })
    router.get('/p2', function(req, res) {
        res.send('employee Router p2');
    })

    app.get('/employee/p3', function(req, res) {
        res.send('employee Router p3');
    })
    return router;
}

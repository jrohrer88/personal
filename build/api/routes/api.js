// var auth = require('./auth');
module.exports = {
    addTo: function (router) {
        router.post('/test', function (req, res) {
            console.log(req.body);
            res.json({
                stuff: req.body
            });
        });
    }
}

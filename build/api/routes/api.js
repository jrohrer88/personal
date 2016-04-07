var auth = require('./auth');
module.exports = {
    addTo: function (router) {
        router.get('/something', auth, function () {
            // do something
        });
    }
}

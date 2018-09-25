const log = require('./log');
let articles = require('./articles.json');

module.exports.readAll = function readAll(req, res, payload, cb) {
    log.log(req.url, payload);
    cb(null, articles);
}
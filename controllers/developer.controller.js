const Developer = require('../models/developer.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Developer controller works!');
}

exports.developer_list = function (req, res, next) {
    Developer.find(function (err, developer) {
        if (err) return next(err);
        res.send(developer);
    })
};

exports.developer_create = function (req, res, next) {
    let developer = new Developer(
        {
            name: req.body.name,
            project: req.body.project
        }
    );

    developer.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Developer Created successfully!')
    })
};

exports.developer_details = function (req, res, next) {
    Developer.findById(req.params.id, function (err, developer) {
        if (err) return next(err);
        res.send(developer);
    })
};

exports.developer_update = function (req, res, next) {
    Developer.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, developer) {
        if (err) return next(err);
        res.send('Developer udpated successfully!');
    });
};

exports.developer_delete = function (req, res, next) {
    Developer.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Developer deleted successfully!');
    })
};
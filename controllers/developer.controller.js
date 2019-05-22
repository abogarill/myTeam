const Developer = require('../models/developer.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Developer controller works!');
}

exports.developer_list = function (req, res, next) {
    Developer.find(function (err, developer) {
        if (err) return next(err);
        res.render('developer',{
            developer: developer
        });
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
        res.redirect('/myTeam/developers/list');
    })
};

exports.developer_details = function (req, res, next) {
    Developer.findById(req.params.id, function (err, developer) {
        if (err) return next(err);
        res.json(developer);
    })
};

exports.developer_update = function (req, res, next) {
    Developer.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, developer) {
        if (err) return next(err);
        res.send('Developed update successfully!');
    });
};

exports.developer_update_form = function (req, res, next) {
    Developer.findByIdAndUpdate(req.body.id, {$set: req.body}, function (err, developer) {
        if (err) return next(err);
        res.redirect('/myTeam/developers/list');
    });
};

exports.developer_delete = function (req, res, next) {
    Developer.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Developed delete successfully!');
    })
};

exports.developer_delete_form = function (req, res, next) {
    Developer.findByIdAndRemove(req.body.id, function (err) {
        if (err) return next(err);
        res.redirect('/myTeam/developers/list');
    })
};
'use strict';

/**
 * Module dependencies.
 */
var mongoose    = require('mongoose'),
    Page        = mongoose.model('Page'),
    _           = require('lodash');

/**
 * List of Articles
 */
exports.all = function(req, res) {
    Page.find().sort('-created').exec(function(err, models) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(models);
        }
    });
};


/**
 * Create a article
 */
exports.create = function(req, res) {
    var model = new Page(req.body);
    console.log(model);

    model.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                routes: model
            });
        } else {
            res.jsonp(model);
        }
    });
};
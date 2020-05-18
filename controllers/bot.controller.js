const _ = require('lodash');
const jsonfile = require('jsonfile');

const __data__ = './data/data.json';

exports.list = function (req, res) {
    let _d_ = jsonfile.readFileSync(__data__);

    return res.status(200).json(_d_);
};

exports.create = function (req, res) {
    let { q } = req.body;

    let _d_ = jsonfile.readFileSync(__data__);

    let __non__ = _.find(_d_.s, function (o) {
        return o.q === q;
    });

    if (!__non__) {
        _d_.s.push(req.body);

        jsonfile.writeFileSync(__data__, _d_);
    }

    return res.status(200).json(jsonfile.readFileSync(__data__));
};

exports.update = function (req, res) {
    let { q, a, t } = req.body;

    let _d_ = jsonfile.readFileSync(__data__);

    _.findIndex(_d_.s, function (v, i) {
        if (v.q === q && v.t === t) {
            v.a = a;
        }
    });

    jsonfile.writeFileSync(__data__, _d_);

    return res.status(200).json(jsonfile.readFileSync(__data__));
};

exports.delete = function (req, res) {
    let { q, t } = req.body;

    let _d_ = jsonfile.readFileSync(__data__);

    let _s_ = _.reject(_d_.s, function (o) {
        return o.q === q && o.t === t;
    });

    _d_.s = _s_;

    jsonfile.writeFileSync(__data__, _d_);

    return res.status(200).json(jsonfile.readFileSync(__data__));
};

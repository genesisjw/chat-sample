const _ = require('lodash');
const jsonfile = require('jsonfile');

const __data__ = './data/data.json';

exports.send = function (req, res) {
    let { type, message } = req.body;

    let _d_ = jsonfile.readFileSync(__data__);

    let __a__ = _.find(_d_.s, function (o) {
        return o.q === message;
    });

    if (!__a__) {
        return res.status(200).json({ answer: _d_.else });
    } else {
        return res.status(200).json({ answer: __a__.a });
    }
};

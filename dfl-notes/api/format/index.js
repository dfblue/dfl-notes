const { formatDFLModelParams } = require('../../../util/format');

module.exports = (req, res) => {
    try {
        const formatted = formatDFLModelParams(req.body.dfloutput);
        res.send(formatted);
    } catch (err) {
        res.statusCode(500).send(JSON.stringify(err));
    }
}
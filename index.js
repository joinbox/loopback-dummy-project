const createAndLinkBookData = require('./fixtures/createAndLinkBookData');

module.exports = function(models) {
    return createAndLinkBookData(models);
};

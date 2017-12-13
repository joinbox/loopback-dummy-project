const createAndLinkBookData = require('./fixtures/createAndLinkBookData');

module.exports = function(server) {
    return createAndLinkBookData(server.app.models);
};

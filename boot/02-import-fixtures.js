const createAndLinkBookData = require('../fixtures/createAndLinkBookData');

module.exports = async function(app, callback) {
    await createAndLinkBookData(app.models);
    callback();
};

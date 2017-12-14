const migrateDatasources = require('../fixtures/migrateDatasources');

module.exports = async function(app, callback) {
    await migrateDatasources(app.datasources);
    callback();
};

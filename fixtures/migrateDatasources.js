function migrateDatasource(datasource) {
    return new Promise((resolve, reject) => {
        datasource.automigrate((err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

module.exports = function(datasources) {
    const sources = new Set();

    const pendingMigrations = Object
        .keys(datasources)
        .reduce((promises, datasourceName) => {
            const currentSource = datasources[datasourceName];
            if (!sources.has(currentSource)) {
                sources.add(currentSource);
                promises.push(migrateDatasource(currentSource));
            }
            return promises;
        }, []);

    return Promise.all(pendingMigrations);
    const creator = new BookDataCreator(models);

    return creator.createAndLinkBookData();
};

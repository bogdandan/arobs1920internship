const packageJson = require('../package');
const env = require('../env');

module.exports = {
    NAME: packageJson.name,
    VERSION: packageJson.version,
    DESCRIPTION: packageJson.description,
    ...env,
};

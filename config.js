require('dotenv').config();

function get(name, fallback, options = {}) {
    if (process.env[name]) {
        return process.env[name];
    }
    throw new Error('Missing env var ' + name);
}

module.exports = {
    nomis: {
        target: 'https://noms-api-dev.dsd.io',
        apiGatewayToken: get('NOMIS_GW_TOKEN', 'dummy'),
        apiGatewayPrivateKey:
            new Buffer(get('NOMIS_GW_KEY', 'dummy'), 'base64').toString('ascii'),
    }
};
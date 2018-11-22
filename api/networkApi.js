const { makeRequest } = require('../utils');

getNetworkInfo = (network) => {
    return makeRequest(network, "getnetworkinfo");
};

getConnectionCount = (network) => {
    return makeRequest(network, "getconnectioncount");
};

getDifficulty = (network) => {
    return makeRequest(network, "getdifficulty");
};

ping = (network) => {
    return makeRequest(network, "ping");
}

module.exports = {
    getNetworkInfo,
    getConnectionCount,
    getDifficulty,
    ping
}

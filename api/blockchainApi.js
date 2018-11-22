const { makeRequest } = require('../utils');

getInfo = (network) => {
    return makeRequest(network, "getinfo");
};

getMiningInfo = (network) => {
    return makeRequest(network, "getmininginfo");
};


getBlockchainInfo = (network) => {
    return makeRequest(network, "getblockchaininfo");
};

getBestBlockHash = (network) => {
    return makeRequest(network, "getbestblockhash");
};

getBlock = (network, hash) => {
    return makeRequest(network, "getblock", [ hash ]);
};

getBlockCount = (network) => {
    return makeRequest(network, "getblockcount");
};

getBlockHash = (network, index) => {
    return makeRequest(network, "getblockhash", [ index ]);
};




module.exports = {
    getInfo,
    getBlockchainInfo,
    getMiningInfo,
    getBestBlockHash,
    getBlock, 
    getBlockCount, 
    getBlockHash,
}
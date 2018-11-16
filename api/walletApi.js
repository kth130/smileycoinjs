const { makeRequest } = require('../utils');

getWalletInfo = (network) => {
   return makeRequest(network, "getwalletinfo");
}
getAccount = (network, address) => {
    return makeRequest(network, "getaccount", [ address ]);
};

getAccountAddress = (network, account) => {
    return makeRequest(network, "getaccountaddress", [ account ]);
};

listUnspent = (network, min = 1 , max = 999999) => {
    return makeRequest(network, "listunspent", [ min, max ]);
};

listAccounts = (network, minconf = 1) => {
    return makeRequest(network, "listaccounts", [ minconf ]);
};

dumpPrivKey = (network, address) => {
    return makeRequest(network, "dumpPrivKey", [address]);
};

dumpWallet = (network, filename) => {
    return makeRequest(network, "dumpwallet", [filename]);
};

module.exports = {
    getAccount,
    getAccountAddress,
    getWalletInfo,
    listAccounts,
    listUnspent,
    dumpPrivKey,
    dumpWallet
}
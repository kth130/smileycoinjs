const { makeRequest } = require('../utils');

dumpPrivKey = (network, address) => {
    return makeRequest(network, "dumpPrivKey", [address]);
};

dumpWallet = (network, filename) => {
    return makeRequest(network, "dumpwallet", [filename]);
};

getAccount = (network, address) => {
    return makeRequest(network, "getaccount", [ address ]);
};

getAccountAddress = (network, account) => {
    return makeRequest(network, "getaccountaddress", [ account ]);
};

getBalance = (network, account = "", minconf = 1) => {
    return makeRequest(network, "getbalance", [ account, minconf ]);
};

getUnconfirmedBalance = (network) => {
    return makeRequest(network, "getunconfirmedbalance");
}

getWalletInfo = (network) => {
    return makeRequest(network, "getwalletinfo");
};

listUnspent = (network, min = 1 , max = 999999) => {
    return makeRequest(network, "listunspent", [ min, max ]);
};

listAccounts = (network, minconf = 1) => {
    return makeRequest(network, "listaccounts", [ minconf ]);
};

getNewAddress = (network, account = "") => {
    return makeRequest(network, "getnewaddress", [ account ]);
};

setTransactionFee = (network, amount) => {
    return makeRequest(network, "settxfee", [ amount ]);
};



module.exports = {
    getAccount,
    getAccountAddress,
    getNewAddress,
    getBalance,
    getUnconfirmedBalance,
    getWalletInfo,
    listAccounts,
    listUnspent,
    dumpPrivKey,
    dumpWallet,
    setTransactionFee,
}
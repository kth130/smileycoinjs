const { makeRequest } = require('../utils');

dumpPrivKey = (network, address) => {
    return makeRequest(network, "dumpprivkey", [address]);
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

getAddressesByAccount = (network, account) => {
    return makeRequest(network,"getaddressesbyaccount", [ account ]);
};

getReceivedByAccount = (network, account, minconf) => {
    return makeRequest(network, "getreceivedbyaccount", [ account, minconf ]);
}

listReceivedByAccount = (network, minconf = 1, include_empty = false) => {
    return makeRequest(network, "listreceivedbyaccount", [ minconf, include_empty ]);
}

getReceivedByAddress = (network, address, minconf) => {
    return makeRequest(network, "getreceivedbyaddress", [ address, minconf ]);
}

listReceivedByAddress = (network, minconf = 1, include_empty = false) => {
    return makeRequest(network, "listreceivedbyaddress", [ minconf, include_empty ]);
}

getBalance = (network, account, minconf) => {
    return makeRequest(network, "getbalance", [ account, minconf ]);
};

getUnconfirmedBalance = (network) => {
    return makeRequest(network, "getunconfirmedbalance");
}

getWalletInfo = (network) => {
    return makeRequest(network, "getwalletinfo");
};

listUnspent = (network, min, max) => {
    return makeRequest(network, "listunspent", [ min, max ]);
};

listAccounts = (network, minconf) => {
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
    getAddressesByAccount,
    getReceivedByAccount,
    getReceivedByAddress,
    listReceivedByAccount,
    listReceivedByAddress,
    listAccounts,
    listUnspent,
    dumpPrivKey,
    dumpWallet,
    setTransactionFee,
}
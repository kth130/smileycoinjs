const { makeRequest } = require('../utils');

getWalletInfo = () => makeRequest("getwalletinfo");

getAccount = (address) => makeRequest("getaccount", [ address ]);
getAccountAddress = (account) => makeRequest("getaccountaddress", [ account ]);

listUnspent = (min = 1 , max = 999999) => makeRequest("listunspent", [ min, max ]);
listAccounts = (minconf = 1) => makeRequest("listaccounts", [ minconf ]);

dumpPrivKey = (address) => makeRequest("dumpPrivKey", [address]);
dumpWallet = (filename) => makeRequest("dumpwallet", [filename]);

module.exports = {
    getAccount,
    getAccountAddress,
    getWalletInfo,
    listAccounts,
    listUnspent,
    dumpPrivKey,
    dumpWallet
}
const { makeRequest } = require("../utils");

send = (network, address, satAmount) => {
    return makeRequest(network, "sendtoaddress", [ address, satAmount ]);
};

sendFrom = (network, fromAccount, toAccount, amount, minconf = 1, comment = "", commentTo = "") =>{
    return makeRequest(network, "sendfrom", [fromAccount, toAccount, amount, minconf, comment, commentTo]);
}

sendMany = (network, fromAccount, toAccounts, minconf = 1, comment = "") => {
    return makeRequest(network, "sendmany", [fromAccount, toAccounts, minconf, comment]);
}
getTransaction = (network, txid) => {
    return makeRequest(network, "gettransaction", [ txid ]);
};

getRawTransaction = (network, txid, verbose = 0) => {
    return makeRequest(network, "getrawtransaction", [ txid, verbose ]);
};

listTransactions = (network, account = "", count = 10, from = 0) => {
    return makeRequest(network, "listtransactions", [ account, count, from ]);
};

verifyMessage = (network, address, signature, message) => {
    return makeRequest(network, "verifymessage", [ address, signature, message ]);
};

createRawTransaction = (network, transactions, addresses) => {
    return makeRequest(network, "createrawtransaction", [transactions, addresses]);
}

signRawTransaction = (network, hexstring) => {
    return makeRequest(network, "signrawtransaction", [hexstring]);
}

sendRawTransaction = (network, hexstring, allowHighFees = false) => {
    return makeRequest(network, "sendrawtransaction", [hexstring, allowHighFees]);
}


module.exports = {
    send,
    sendFrom,
    sendMany,
    getTransaction,
    getRawTransaction,
    listTransactions,
    verifyMessage,
    createRawTransaction, 
    signRawTransaction,
    sendRawTransaction
}

// smileycoin-cli getrawtransaction "0100000001980c808141dde026bf70201b361ad651f629a5fd2f2fadc53c86a5f36558f04f0100000000ffffffff0220fd34ead90200001976a9147595cd909f5ab133dbac1b5fb502052d545abf1788ac00ca9a3b000000001976a914710c620b86dd89a4ed6213b3248ddeb50ab707a988ac00000000"

//0100000001980c808141dde026bf70201b361ad651f629a5fd2f2fadc53c86a5f36558f04f0100000000ffffffff0220fd34ead90200001976a9147595cd909f5ab133dbac1b5fb502052d545abf1788ac00ca9a3b000000001976a914710c620b86dd89a4ed6213b3248ddeb50ab707a988ac00000000
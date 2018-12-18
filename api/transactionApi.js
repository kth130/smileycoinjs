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

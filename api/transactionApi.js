const request = require('request');
const { makeRequest } = require("../utils");
// todo (torfi): put these into config file
const url = 'http://127.0.0.1:9332'; 
const username = 'username'; 
const password = 'password';

send = (network, address, satAmount) => {
    return makeRequest(network, "sendtoaddress", [ address, satAmount ]);
};

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


module.exports = {
    send,
    getTransaction,
    getRawTransaction,
    listTransactions,
    verifyMessage
}
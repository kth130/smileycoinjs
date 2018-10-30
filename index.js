const request = require('request');
const blockchainApi = require('./api/blockchainApi');
const transactionApi = require('./api/transactionApi');

function getBlockchainInfo() {
    return blockchainApi.getBlockchainInfo()
}

function send(address, satAmount) {
    return transactionApi.send(address, satAmount);
}

function getTransaction(txid) {
    return transactionApi.getTransaction(txid);
}

module.exports = {
    getBlockchainInfo,
    send,
    getTransaction,
    listUnspent: transactionApi.listUnspent,
    listAccounts: transactionApi.listAccounts,
    getWalletInfo: transactionApi.getWalletInfo,
    getInfo: transactionApi.getInfo,
}
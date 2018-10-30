const request = require('request');

const blockchainApi = require('./api/blockchainApi');
const transactionApi = require('./api/transactionApi');
const walletApi = require('./api/walletApi');

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
    listUnspent: walletApi.listUnspent,
    listAccounts: walletApi.listAccounts,
    getWalletInfo: walletApi.getWalletInfo,
    getInfo: blockchainApi.getInfo,
    getAccount: walletApi.getAccount,
    getAccountAddress: walletApi.getAccountAddress
}
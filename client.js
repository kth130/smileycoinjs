const blockchainApi = require('./api/blockchainApi');
const transactionApi = require('./api/transactionApi');
const walletApi = require('./api/walletApi');

function Client(network, maxFee = 1){
    this.network = network;
    this.network.url = this.network.url || 'http://localhost:9332';
    this.maxFee = maxFee;

}

Client.prototype.getBlockchainInfo = function () {
    return blockchainApi.getBlockchainInfo();
}

Client.prototype.send = function(address, satAmount) {
    return transactionApi.send(address, satAmount);
}

Client.prototype.getTransaction = function(txid) {
    return transactionApi.getTransaction(txid);
}

Client.prototype.getInfo = function() {
    return blockchainApi.getInfo(this.network);
}

Client.prototype.getAccount = function(address) {
    return walletApi.getAccount(this.network, address);
}

Client.prototype.getAccountAddress = function(account) {
    return walletApi.getAccountAddress(this.network, account);
}


Client.prototype.getWalletInfo = function() {
    return walletApi.getWalletInfo(this.network);
}

Client.prototype.listAccounts = function(minconf) {
    return walletApi.listAccounts(this.network, minconf);
}

Client.prototype.listUnspent = function(min, max) {
    return walletApi.listUnspent(this.network, min, max)
}

Client.prototype.dumpPrivKey = function(address) {
    return walletApi.dumpPrivKey(this.network, address);
}

module.exports = Client;
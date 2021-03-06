const blockchainApi = require('./api/blockchainApi');
const transactionApi = require('./api/transactionApi');
const walletApi = require('./api/walletApi');
const networkApi = require('./api/networkApi');

function Client(network, maxFee = 1){
    this.network = network;
    this.network.url = this.network.url || 'http://localhost:9332';
    this.maxFee = maxFee;

}
/**
 * Blockchain API starts
 */
Client.prototype.getBlockchainInfo = function () {
    return blockchainApi.getBlockchainInfo(this.network);
}

Client.prototype.getInfo = function() {
    return blockchainApi.getInfo(this.network);
}

Client.prototype.getMiningInfo = function () {
    return blockchainApi.getMiningInfo(this.network);
};

Client.prototype.getBestBlockHash = function () {
    return blockchainApi.getBestBlockHash(this.network);
};

Client.prototype.getBlock = function (hash) {
    return blockchainApi.getBlock(this.network, hash);
};

Client.prototype.getBlockCount = function () {
    return blockchainApi.getBlockCount(this.network);
};

Client.prototype.getBlockHash = function (index) {
    return blockchainApi.getBlockHash(this.network, index);
};

Client.prototype.validateAddress = function(address) {
    return blockchainApi.validateAddress(this.network, address);
}

/**
 * Transaction API starts
 */

Client.prototype.send = function(address, satAmount) {
    return transactionApi.send(this.network, address, satAmount);
};

Client.prototype.sendFrom = function(fromAccount, toAccount, minconf, comment, commentTo) {
    return transactionApi.send(this.network, fromAccount, toAccount, minconf, comment, commentTo);
};

Client.prototype.sendMany = function(fromAccount, toAccounts, minconf, comment) {
    return transactionApi.send(this.network, fromAccount, toAccounts, minconf, comment);
};

Client.prototype.getTransaction = function(txid) {
    return transactionApi.getTransaction(this.network, txid);
};

Client.prototype.getRawTransaction = function(txid) {
    return transactionApi.getRawTransaction(this.network, txid);
};

Client.prototype.listTransactions = function(account, count, from) {
    return transactionApi.listTransactions(this.network, account, count, from);
};

Client.prototype.verifyMessage = function(address, signature, message) {
    return transactionApi.verifyMessage(this.network, address, signature, message);
};

Client.prototype.createRawTransaction = function(transactions, addresses) {
    return transactionApi.createRawTransaction(this.network, transactions, addresses);
}

Client.prototype.signRawTransaction = function(hexstring, prevtxs, privatekeys, sighashtype ) {
    return transactionApi.signRawTransaction(this.network, hexstring, prevtxs, privatekeys, sighashtype);
}

Client.prototype.sendRawTransaction = function(hexstring, allowHighFees) {
    return transactionApi.sendRawTransaction(this.network, hexstring, allowHighFees);
}



/**
 * Wallet API starts
 */
Client.prototype.getAccount = function(address) {
    return walletApi.getAccount(this.network, address);
};

Client.prototype.getAccountAddress = function(account) {
    return walletApi.getAccountAddress(this.network, account);
};

Client.prototype.getAddressesByAccount = function(account) {
    return walletApi.getAddressesByAccount(this.network,account);
};

Client.prototype.getNewAddress = function(account) {
    return walletApi.getNewAddress(this.network, account);
};

Client.prototype.getReceivedByAccount = function(account, minconf) {
    return walletApi.getReceivedByAccount(this.network, account, minconf);
};

Client.prototype.listReceivedByAccount = function(minconf, include_empty) {
    return walletApi.getReceivedByAccount(this.network, minconf, include_empty);
};

Client.prototype.getReceivedByAddress = function(address, minconf) {
    return walletApi.getReceivedByAddress(this.network, address, minconf);
};
Client.prototype.listReceivedByAddress = function(minconf, include_empty) {
    return walletApi.getReceivedByAddress(this.network, minconf, include_empty);
};

Client.prototype.getBalance = function(account, minconf) {
    return walletApi.getBalance(this.network, account, minconf);
};

Client.prototype.getUnconfirmedBalance = function() {
    return walletApi.getUnconfirmedBalance(this.network);
};

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

Client.prototype.setTransactionFee = function(amount) {
    return walletApi.setTransactionFee(this.network, amount);
}

Client.prototype.signMessage = function(address, message) {
    return walletApi.signMessage(this.network, address, message);
}

/**
 * Network API starts
 */

Client.prototype.getNetworkInfo = function() {
    return networkApi.getNetworkInfo(this.network);
}

Client.prototype.getConnectionCount = function() {
    return networkApi.getConnectionCount(this.network);
}

Client.prototype.getDifficulty = function() {
    return networkApi.getDifficulty(this.network);
}

Client.prototype.ping = function() {
    return networkApi.ping(this.network);
}

module.exports = Client;
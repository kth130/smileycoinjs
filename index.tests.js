const { Client } = require('./index');

const smly = new Client({username: '', password: '' });
// todo (torfi): very naive tests, quick implementation to be able to make calls to the api (in smly.js)
// later choose a framework and rewrite tests

function getBlockchainInfoTest() {
    smly.getBlockchainInfo()
    .then((result) => {
        let info = JSON.parse(result);
        if (info.result.chain === 'main') console.log('getBlockchainInfoTest passed')
        else console.log('getBlockchainInfoTest failed');
    })
    .catch((err) => {
        console.log('getBlockchainInfoTest failed');
    });
}

function sendTest() {
    smly.send('BSxg8zTJrdi36pLkVeQfrqagBB2oyAyPXe', 11)
    .then((result) => {
        let info = JSON.parse(result);
        if (!info.error) console.log('sendTest passed, tdix: ' + info.result)
        else console.log('sendTest failed - ' + info.error);
    })
    .catch((err) => {
        console.log('sendTest failed - error: ' + err);
    });
}

function getTransactionTest() {
    smly.getTransaction('e299717de8f718961bf2dd3c286fac798b0166fe20dddf282cf42044875b2148')
    .then((result) => {
        let info = JSON.parse(result);
        if (info.result.txid) console.log('getTransactionTest passed, tdix: ' + info.result.txid)
        else console.log('getTransactionTest failed - ' + info);
    })
    .catch((err) => {
        console.log('getTransactionTest failed - error: ' + err);
    });
}

function listUnspentTest() {
    smly.listUnspent()
    .then((result) => {
        let info = JSON.parse(result);
        if (!info.error) console.log('listUnspentTest passed');
        else console.log('listUnspentTest failed - ' + info);
    })
    .catch((err) => {
        console.log('listUnspentTest failed - error: ' + err);
    });
}

function getWalletInfoTest() {
    smly.getWalletInfo()
    .then((result) => {
        let info = JSON.parse(result);
        if (!info.error) console.log('getWalletInfo passed');
        else console.log('getWalletInfo failed - ' + info);
    })
    .catch((err) => {
        console.log('getWalletInfo failed - error: ' + err);
    });
}

function listAccountsTest() {
    smly.listAccounts()
    .then((result) => {
        let info = JSON.parse(result);
        if (!info.error) console.log('listAccounts passed');
        else console.log('listAccounts failed - ' + info);
    })
    .catch((err) => {
        console.log('listAccounts failed - error: ' + err);
    });
}

function getInfoTest() {
    smly.getInfo()
    .then((result) => {
        let info = JSON.parse(result);
        if (!info.error) console.log('getInfo passed');
        else console.log('listTransactions failed - ' + info);
    })
    .catch((err) => {
        console.log('getInfo failed - error: ' + err);
    });
}

function getAccountTest(){
    smly.getAccount('BF65fJ11E5tnrgYZYgxXsKfsJjzP3YYwzE')
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('getAccount passed - Account: ' + info.result);
        else console.log('getAccount failed - ' + result);        
    })
    .catch((err) => {
        console.log('getAccount failed - error: ' + err)
    });
}

function getAccountAddressTest(){
    smly.getAccountAddress('')
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('getAccountAddress passed - Account: ' + info.result);
        else console.log('getAccountAddress failed - ' + result);        
    })
    .catch((err) => {
        console.log('getAccountAddress failed - error: ' + err)
    });
}

getBlockchainInfoTest();
//sendTest();
//getTransactionTest();
listAccountsTest();
listUnspentTest();
getInfoTest();
getWalletInfoTest();
getAccountTest();
getAccountAddressTest();
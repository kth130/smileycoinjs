const { Client } = require('./index');

const smly = new Client({username: '', password: '' });
// todo (torfi): very naive tests, quick implementation to be able to make calls to the api (in smly.js)
// later choose a framework and rewrite tests
const address = "";
const account = "";
const blockhash = "";

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

function getMiningInfoTest() {
    smly.getMiningInfo()
    .then((result) => {
        let info = JSON.parse(result);
        if (!info.error) console.log('getMiningInfo passed');
        else console.log('getMiningInfo failed - ' + info);
    })
    .catch((err) => {
        console.log('getMiningInfo failed');
    });
}

function getBlockTest() {
    smly.getBlock(blockhash)
    .then((result) => {
        let info = JSON.parse(result);
        if (!info.error) console.log('getBlock passed');
        else console.log('getBlock failed - ' + info);
    })
    .catch((err) => {
        console.log('getBlock failed');
    });
}
function getBestBlockHashTest() {
    smly.getBestBlockHash()
    .then((result) => {
        let info = JSON.parse(result);
        if (!info.error) console.log('getBestBlockHash passed - hash: ' + info.result);
        else console.log('getBestBlockHash failed - ' + info);
    })
    .catch((err) => {
        console.log('getBestBlockHash failed');
    });
}

function getBlockCountTest() {
    smly.getBlockCount()
    .then((result) => {
        let info = JSON.parse(result);
        if (!info.error) console.log('getBlockCount passed - Block count: ' + info.result);
        else console.log('getBlockCount failed - ' + info);
    })
    .catch((err) => {
        console.log('getBlockCount failed');
    });
} 
function getBlockHashTest() {
    smly.getBlockHash(1)
    .then((result) => {
        let info = JSON.parse(result);
        if (!info.error) console.log('getBlockHash passed - hash: ' + info.result);
        else console.log('getBlockHash failed - ' + info);
    })
    .catch((err) => {
        console.log('getBlockHash failed');
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
    smly.getAccount(address)
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
    smly.getAccountAddress("")
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('getAccountAddress passed - Account: ' + info.result);
        else console.log('getAccountAddress failed - ' + result);        
    })
    .catch((err) => {
        console.log('getAccountAddress failed - error: ' + err)
    });
}

function getBalanceTest(){
    smly.getBalance()
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('getBalance passed - Balance: ' + info.result);
        else console.log('getBalance failed - ' + result);        
    })
    .catch((err) => {
        console.log('getBalance failed - error: ' + err)
    });
}

function getNewAddressTest(){
    smly.getNewAddress()
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('getNewAddress passed - Address: ' + info.result);
        else console.log('getNewAddress failed - ' + result);        
    })
    .catch((err) => {
        console.log('getNewAddress failed - error: ' + error);
        
    });
}

function getUnconfirmedBalanceTest() {
    smly.getUnconfirmedBalance()
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('getUnconfirmedBalance passed - Address: ' + info.result);
        else console.log('getUnconfirmedBalance failed - ' + result);        
    })
    .catch((err) => {
        console.log('getUnconfirmedBalance failed - error: ' + err);
        
    });
}

function getReceivedByAccountTest() {
    smly.getReceivedByAccount("")
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('getReceivedByAccount passed - Address: ' + info.result);
        else console.log('getReceivedByAccount failed - ' + result);        
    })
    .catch((err) => {
        console.log('getReceivedByAccount failed - error: ' + err);
        
    });
}

function getReceivedByAddressTest() {
    smly.getReceivedByAddress(address)
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('getReceivedByAddress passed - Address: ' + info.result);
        else console.log('getReceivedByAddress failed - ' + result);        
    })
    .catch((err) => {
        console.log('getReceivedByAddress failed - error: ' + err);
        
    });
}

function getAddressesByAccountTest() {
    smly.getAddressesByAccount("")
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('getAddressesByAccount passed - Address: ' + info.result);
        else console.log('getAddressesByAccount failed - ' + result);        
    })
    .catch((err) => {
        console.log('getAddressesByAccount failed - error: ' + err);
        
    });
}

function listReceivedByAddressTest(){
    smly.listReceivedByAddress(address)
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('listReceivedByAddress passed - Result: ' + info.result);
        else console.log('listReceivedByAddress failed - ' + result);        
    })
    .catch((err) => {
        console.log('listReceivedByAddress failed - error: ' + err);
        
    });
}

function listReceivedByAccountTest(){
    smly.listReceivedByAccount(account)
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('listReceivedByAccount passed - Result: ' + info.result);
        else console.log('listReceivedByAccount failed - ' + result);        
    })
    .catch((err) => {
        console.log('listReceivedByAccount failed - error: ' + err);
        
    });
}

function dumpPrivKeyTest(){
    smly.dumpPrivKey(address)
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('dumpPrivKey passed - Address: ' + info.result);
        else console.log('dumpPrivKey failed - ' + result);        
    })
    .catch((err) => {
        console.log('dumpPrivKey failed - error: ' + err);
        
    });
}

function dumpWalletTest(){
    smly.dumpWallet()
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('dumpWallet passed - Address: ' + info.result);
        else console.log('dumpWallet failed - ' + result);        
    })
    .catch((err) => {
        console.log('dumpWallet failed - error: ' + err);
        
    });
}

function setTransactionFeeTest(){
    smly.setTransactionFee(1)
    .then((result) => {
        let info = JSON.parse(result);
        if(!info.error) console.log('setTransactionFee passed');
        else console.log('setTransactionFee failed - ' + result);        
    })
    .catch((err) => {
        console.log('setTransactionFee failed - error: ' + err);
        
    });
}





/* Tests for BlockchainAPI */
getBlockchainInfoTest();
getInfoTest();
getMiningInfoTest();
getBestBlockHashTest();
getBlockTest();
getBlockCountTest();
getBlockHashTest()


/* Test for Transaction API */
//sendTest();
//getTransactionTest();

/* Tests for WalletAPI */
getAccountTest();
getAccountAddressTest();
//getNewAddressTest();
getBalanceTest(),
getUnconfirmedBalanceTest();
getWalletInfoTest();
getAddressesByAccountTest();
getReceivedByAccountTest(),
getReceivedByAddressTest(),
listReceivedByAccountTest();
listReceivedByAddressTest();
listAccountsTest();
listUnspentTest();
dumpPrivKeyTest();
//dumpWallet,
setTransactionFeeTest();

/* Tests for NetworkAPI */


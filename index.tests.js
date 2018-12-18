const { Client } = require('./index');

const smly = new Client({username: '', password: '' });

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
        console.log('getBlockchainInfoTest failed' + err);
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
        console.log('getMiningInfo failed' + err);
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
    smly.send('<address>', 11)
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
    smly.getTransaction('<txid>')
    .then((result) => {
        let info = JSON.parse(result);
        if (info.result.txid) console.log('getTransactionTest passed, tdix: ' + info.result.txid)
        else console.log('getTransactionTest failed - ' + info);
    })
    .catch((err) => {
        console.log('getTransactionTest failed - error: ' + err);
    });
}

function getRawTransactionTest() {
    smly.getRawTransaction('<txid>')
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
        console.log('getNewAddress failed - error: ' + err);
        
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

async function createRawTransactionTest(){
    let unspent;
    try {
        unspent = await smly.listUnspent();
    } catch (err){
        unspent = null;
    }
    unspent = JSON.parse(unspent);
    var output = unspent.result;

    var transactions = [{
        txid: output[0].txid,
        vout: 0
    }];

    var addresses = {};
    addresses[output[0].address] = output[0].amount - 12;
    addresses[address] = 10;
    console.log(transactions, addresses);
    
    let result;
    try {
        result = await smly.createRawTransaction(transactions, addresses);
    } catch(err){
        console.log(err);
    }

    var info = JSON.parse(result);
    if(info && !info.error) console.log("createrawtransaction passed - " + info.result);
    else console.log("createrawtransaction failed - " + info.error);
}

async function signRawTransactionTest(){
    let result;
    try { 
        result = await smly.signRawTransaction("<hexstring>")
    } catch(err){
        console.log("signrawtransaction failed - " + err);
    }
    console.log(result);
    if (result && !result.error) console.log("signrawtransaction passed - " + result.result);
    
}

async function sendRawTransactionTest(){
    let result;
    try {
        result = await smly.sendRawTransaction("<hexstring>");
    } catch (err) {
        console.error(err);
    }

    var info = JSON.parse(result);
    if(info && !info.error) console.log("sendrawtransaction successful - " + JSON.stringify(info.result));
}

function signMessageTest() {
    smly.signMessage("<address>", "<message>")
    .then((result) => {
        var info = JSON.parse(result);
        if(info && !info.error) console.log("signmessage passed");
        else console.log("signmessage failed");
    })
    .catch(err => {
        console.error(err);
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
sendTest();
getTransactionTest();
getRawTransactionTest();
createRawTransactionTest();
signRawTransactionTest();
sendRawTransactionTest();

/* Tests for WalletAPI */
getAccountTest();
getAccountAddressTest();
getNewAddressTest();
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
dumpWalletTest(),
setTransactionFeeTest();
signMessageTest();

/* Tests for NetworkAPI */



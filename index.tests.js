const index = require('./index');

// todo (torfi): very naive tests, quick implementation to be able to make calls to the api (in index.js)
// later choose a framework and rewrite tests

function getBlockchainInfoTest() {
    index.getBlockchainInfo()
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
    index.send('BSxg8zTJrdi36pLkVeQfrqagBB2oyAyPXe', 11)
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
    index.getTransaction('3fc062b7ba6d750246562153da3c32ce24afae633153728ec72d0cd58ad70078')
    .then((result) => {
        let info = JSON.parse(result);
        if (info.result.txid) console.log('getTransactionTest passed, tdix: ' + info.result.txid)
        else console.log('getTransactionTest failed - ' + info);
    })
    .catch((err) => {
        console.log('getTransactionTest failed - error: ' + err);
    });
}

getBlockchainInfoTest();
sendTest();
getTransactionTest();
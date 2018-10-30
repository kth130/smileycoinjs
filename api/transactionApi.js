const request = require('request');

// todo (torfi): put these into config file
const url = 'http://127.0.0.1:9332'; 
const username = 'username'; 
const password = 'password';

function send(address, satAmount) {
    return new Promise((resolve, reject) => {
        request.post(url, 
            { 
                headers: createRequestHeaders(username, password), 
                body: JSON.stringify(
                    {
                        "jsonrpc":2.0,
                        "id":1,
                        "method":"sendtoaddress",
                        "params":[
                            address, 
                            satAmount
                        ]
                    }
                )
            }, (err, res, body) => {
                if(err) reject(err)
                if(res.statusCode != 200) reject('invalid status code: ' + res.statusCode + ' - ' + body);
                resolve(body);
        });
    })
}

function getTransaction(txid) {
    return new Promise((resolve, reject) => {
        request.post(url, 
            { 
                headers: createRequestHeaders(username, password), 
                body: JSON.stringify(
                    {
                        "jsonrpc":2.0,
                        "id":1,
                        "method":"gettransaction",
                        "params":[
                            txid
                        ]
                    }
                )
            }, (err, res, body) => {
                if(err) reject(err)
                if(res.statusCode != 200) reject('invalid status code: ' + res.statusCode + ' - ' + body);
                resolve(body);
        });
    })
}

getWalletInfo = () => makeRequest("getwalletinfo");
getInfo = () => makeRequest("getinfo");
listUnspent = (minconf = 1) => makeRequest("listunspent", [ minconf ]);
listAccounts = (minconf = 1) => makeRequest("listaccounts", [ minconf ]);

function makeRequest(method, params = []){
    return new Promise((resolve, reject) => {
        request.post(url, 
            { 
                headers: createRequestHeaders(username, password), 
                body: JSON.stringify(
                    {
                        "jsonrpc":2.0,
                        "id":1,
                        "method":method,
                        "params":params
                    }
                )
            }, (err, res, body) => {
                if(err) reject(err)
                if(res.statusCode != 200) reject('invalid status code: ' + res.statusCode + ' - ' + body);
                resolve(body);
        });
    });
}

function createRequestHeaders(username, password) {
    var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64'); 
    const headers = {
        'Content-Type' : 'text/plain',
        'Authorization' : auth
    };
    return headers;
}

module.exports = {
    send,
    getTransaction,
    getWalletInfo,
    getInfo,
    listUnspent,
    listAccounts
}
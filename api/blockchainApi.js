const request = require('request');
const { makeRequest } = require('../utils');

// todo (torfi): put these into config file
const url = 'http://127.0.0.1:9332'; 
const username = 'username'; 
const password = 'password';

getInfo = (network) => makeRequest(network, "getinfo");

function getBlockchainInfo() {
    return new Promise((resolve, reject) => {
        request.post(url, 
            { 
                headers: createRequestHeaders(username, password), 
                body: JSON.stringify(
                    {
                        "jsonrpc":2.0,
                        "id":1,
                        "method":"getblockchaininfo",
                        "params":[]
                    }
                )
            }, (err, res, body) => {
                if(err) reject(err)
                if(res.statusCode != 200) reject('invalid status code: ' + res.statusCode);
                resolve(body);
        });
    })
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
    getBlockchainInfo,
    getInfo
}
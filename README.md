# Smileycoinjs

This package provides an API for interacting with a Smileycoin node(or supposedly any other node for that matter). This makes communication with a wallet using JavaScript much easier for you, by providing the API for most operations. 

One possible use case could be to design a browser-based wallet of sorts, and include whatever information you want there.

## How to use 

First of all you have to have access to a running Smileycoin node. Information on how to build Smileycoin on your machine can be found [here](https://github.com/tutor-web/smileyCoin/tree/master/doc). You will have to run `smileycoind.exe`, or figure out how to run your node on cloud services.

```js
const { Client } = require('smileycoinjs');

const smly = new Client({
    username: 'your rpcusername',
    password: 'your rpcpassword',
    url: 'the url to your node'
})
```

---

**Sending funds**

```js
smly.send("<smileycoin address>", amount)
    .then((result) => {
        var info = JSON.parse(result);
        if(!info.error) console.log("Transaction successful!");
        else console.log("Transaction failed");
    })
    .catch((err) => {
        console.error(err);
    })
```

or the async method:

```js
async function sendFunds(){
    let results;
    try {
        results = await smly.send("<smileycoin address>", amount);
    } catch(err) {
        console.error(err);
    }

    if(results && !results.error) console.log("Transaction successfull");
    else console.log("Transaction failed"); 
}
```

---

**Create raw transaction**

By getting values directly from listunspent, but may also just be hardcoded:

```js
async function createRaw(){
    let unspent;
    try {
        unspent = await smly.listUnspent();
    } catch (err){
        unspent = null;
    }
    unspent = JSON.parse(unspent);
    var output = unspent.result;

    // Construct the outputs
    var transactions = [{
        txid: output[0].txid,
        vout: output[0].vout
    }];

    // Construct the inputs
    var addresses = {};
    addresses[output[0].address] = output[0].amount - 12;
    addresses[<address>] = 10;
    
    let result;
    try {
        result = await smly.createRawTransaction(transactions, addresses);
    } catch(err){
        console.log(err);
    }

    var info = JSON.parse(result);
    if(info && !info.error) console.log("createrawtransaction success - hexstring: " + info.result);
    else console.log("createrawtransaction failed - " + info.error);
}
```

**Sign raw transaction**

```js
async function signRawTransactionTest(){
    let result;
    try { 
        result = await smly.signRawTransaction("<hexstring>")
    } catch(err){
        console.log("signrawtransaction failed - " + err);
    }
    var info = JSON.parse(result);
    if (info && !info.error) console.log("signrawtransaction passed - " + info.result);
    else console.log("signrawtransaction failed");
}
```

**Send raw transaction**

```js
async function sendRawTransaction(){
    let result;
    try {
        result = await smly.sendRawTransaction("<hexstring from signing>");
    } catch (err) {
        console.error(err);
    }

    var info = JSON.parse(result);
    if(info && !info.error) console.log("Raw transaction sent successfully - " + info.result);
    else console.log("Raw transaction unsuccessful");
}
```

**Generating a new address**

```js
smly.getNewAddress("<account>")
    .then((result) => {
        var info = JSON.parse(result);
        if(!info.error) console.log("New address generated successfully!");
        else console.log("Generating new address unsuccessful");
    })
    .catch(err => {
        console.error(err);
    });
```

```js
smly.getNewAddress()
    .then((result) => {
        var info = JSON.parse(result);
        if(!info.error) console.log("New address generated successfully!");
        else console.log("Generating new address unsuccessful");
    })
    .catch(err => {
        console.error(err);
    });
```





## API commands

**Supported operations at this point:**

+ getinfo
+ getblockchaininfo
+ getnetworkinfo
+ getmininginfo
+ getconnectioncount
+ getbestblockhash
+ getblock "hash" ( verbose )
+ getblockcount
+ getblockhash index
+ getdifficulty
+ ping
+ dumpprivkey "smileycoinaddress"
+ dumpwallet "filename"
+ getaccount "smileycoinaddress"
+ getaddressesbyaccount "account"
+ getaccountaddress "account"
+ getbalance ( "account" minconf )
+ getunconfirmedbalance
+ getwalletinfo
+ getnewaddress ( "account" )
+ getreceivedbyaccount "account" ( minconf )
+ getreceivedbyaddress "smileycoinaddress" ( minconf )
+ listreceivedbyaccount ( minconf includeempty )
+ listreceivedbyaddress ( minconf includeempty )
+ listaccounts ( minconf )
+ listunspent ( minconf maxconf  ["address",...] )
+ settxfee amount
+ gettransaction "txid"
+ getrawtransaction "txid" ( verbose )
+ sendtoaddress "address" amount
+ sendfrom "fromaccount" "tosmileycoinaddress" amount ( minconf "comment" "comment-to" )
+ sendmany "fromaccount" {"address":amount,...} ( minconf "comment" )
+ listtransactions ( "account" count from )
+ verifymessage "smileycoinaddress" "signature" "message"
+ validateaddress "smileycoinaddress"
+ createrawtransaction
+ signrawtransaction
+ sendrawtransaction



### TODO

addmultisigaddress nrequired ["key",...] ( "account" )

addnode "node" "add|remove|onetry"

backupwallet "destination"

createmultisig nrequired ["key",...]

createrawtransaction [{"txid":"id","vout":n},...] {"address":amount,...}

decoderawtransaction "hexstring"

decodescript "hex"

encryptwallet "passphrase"

getaddednodeinfo dns ( "node" )

getblocktemplate ( "jsonrequestobject" )

getgenerate

gethashespersec

getnettotals

getpeerinfo

getrawchangeaddress

getrawmempool ( verbose )

getrichaddresses

gettxout "txid" n ( includemempool )

gettxoutsetinfo

getwork ( "data" )

help ( "command" )

importprivkey "smileycoinprivkey" ( "label" rescan )

importwallet "filename"

keypoolrefill ( newsize )

listaddressgroupings

listlockunspent

listsinceblock ( "blockhash" target-confirmations )

lockunspent unlock [{"txid":"txid","vout":n},...]

move "fromaccount" "toaccount" amount ( minconf "comment" )

sendrawtransaction "hexstring" ( allowhighfees )

setaccount "smileycoinaddress" "account"

setgenerate generate ( genproclimit )

signmessage "smileycoinaddress" "message"

signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype 
)

stop

submitblock "hexdata" ( "jsonparametersobject" )


verifychain ( checklevel numblocks )

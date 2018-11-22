# Smileycoinjs

## How to use 

First of all you have to have access to a running smileycoin node. Information on how to build Smileycoin to build on your machine can be found [here](https://github.com/tutor-web/smileyCoin/tree/master/doc). You will have to run `smileycoind.exe`, or figure out how to run your node on cloud services.

```js
const { Client } = require('smileycoinjs');

const smly = new Client({
    username: 'your rpcusername',
    password: 'your rpcpassword',
    url: 'the url to your node'
})
```



## API commands

### Ready

getinfo
getblockchaininfo
getnetworkinfo
getmininginfo
getconnectioncount
getbestblockhash
getblock "hash" ( verbose )
getblockcount
getblockhash index
getdifficulty
ping

dumpprivkey "smileycoinaddress"
dumpwallet "filename"
getaccount "smileycoinaddress"
getaccountaddress "account"
getbalance ( "account" minconf )
getunconfirmedbalance
getwalletinfo
getnewaddress ( "account" )
listaccounts ( minconf )
listunspent ( minconf maxconf  ["address",...] )
settxfee amount

gettransaction "txid"
getrawtransaction "txid" ( verbose )
sendtoaddress "address" amount
listtransactions ( "account" count from )
verifymessage "smileycoinaddress" "signature" "message"



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
getaddressesbyaccount "account"
getblocktemplate ( "jsonrequestobject" )
getgenerate
gethashespersec
getnettotals
getpeerinfo
getrawchangeaddress
getrawmempool ( verbose )
getreceivedbyaccount "account" ( minconf )
getreceivedbyaddress "smileycoinaddress" ( minconf )
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
listreceivedbyaccount ( minconf includeempty )
listreceivedbyaddress ( minconf includeempty )
listsinceblock ( "blockhash" target-confirmations )
lockunspent unlock [{"txid":"txid","vout":n},...]
move "fromaccount" "toaccount" amount ( minconf "comment" )
sendfrom "fromaccount" "tosmileycoinaddress" amount ( minconf "comment" "comment-to" )
sendmany "fromaccount" {"address":amount,...} ( minconf "comment" )
sendrawtransaction "hexstring" ( allowhighfees )
setaccount "smileycoinaddress" "account"
setgenerate generate ( genproclimit )
signmessage "smileycoinaddress" "message"
signrawtransaction "hexstring" ( [{"txid":"id","vout":n,"scriptPubKey":"hex","redeemScript":"hex"},...] ["privatekey1",...] sighashtype )
stop
submitblock "hexdata" ( "jsonparametersobject" )
validateaddress "smileycoinaddress"
verifychain ( checklevel numblocks )

var express = require('express');
var router = express.Router();
const Web3 = require('web3');
var Tx = require('ethereumjs-tx').Transaction;
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
web3.eth.getAccounts(console.log);
const CONTRACT_ADDRESS = '0x3db89c06B14F6d664e5e0Baa1EaB69eD553db8A5';
const ABI = require("./abi.json");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);

  const account = '0xa24D1818712c9e757c1ee244D7cFa0599d1D26F5';
  const privateKey = Buffer.from('0x131385b4642b56c2324bb64f05abddca50f0843ee0d6cd2412d2ff50fcbe9b4b', 'hex');
  const newAddress = '0x175f3e649dA4292F47eD3732814899Ec50d07C63';
  var TestContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
  const _data = TestContract.methods.setOwner(_newAddress).encodeABI();

  web3.eth.getTransactionCount(account)
.then(nonce => {
 var rawTx = {
 nonce: nonce,
 gasPrice: "0x20000000000",
 gasLimit: "0x27511",
 to: contractAddress,
 value: 0,
 data: _data
}

  var tx = new Tx(rawTx);
  tx.sign(privateKey);
  var serializedTx = tx.serialize();
  web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
  .on('receipt', console.log);
  });

});

module.exports = router;

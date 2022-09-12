//import {createClient} from '@layerzerolabs/scan-client';
const ethers = require('ethers');
var cors = require('cors')

// import { createClient } from '@layerzerolabs/scan-client';
// const client = createClient('testnet');

// client
//   .getMessagesBySrcTxHash('0xc6071e98336996084a18a6c47ab38449e31d7d4b48040f35bbcd4106189e3036')
//   .then((result) => {
//     console.log(result.messages);
//   });

  // created: 1662487375
// dstChainId: 10009
// dstTxError: null
// dstTxHash: "0x84f7b065b8fac7330f913d660f9e3d86f99386bc6607d7c90d5f109e3d328f7e"
// dstUaAddress: "0x6a65f7ac9d20412c188883ae229a6798c5cef29e"
// srcBlockHash: "0x1d83059424c8737bc351082b765e969420b9e74f0f190704e33ed1c3896f9f16"
// srcBlockNumber: "22609530"
// srcChainId: 10002
// srcTxHash: "0xaf38050c54da0d4f4242b11c37811ded98c1c13319ef2b8359843f38c39c269f"
// srcUaAddress: "0x184537a204f8763e71b73cfe4eb0ccd50fe581d2"
// srcUaNonce: 11
// status: "DELIVERED"
// updated: 1662487525
// [[Prototype]]: Object
// length: 1

//Should this object be different for every ecosystem
let transaction = {
  srcChainId: 56,            
  srcTxHash: "",
  dstChainId: 137,
  dstTxHash: "",
  fromAddress: "",
  toAddress: "",
  tokenAddress: "", // Null if its native token transfer
  tokenValue: "", //

}


export const getAllTheTxParameters =  (result) =>{
  transaction.srcChainId = result.srcChainId;
  transaction.srcTxHash = result.srcTxHash;
  transaction.dstChainId = result.dstChainId;
  transaction.dstChainId = result.dstTxHash;



}

const getInfoFromRecieveTransaction = async (hash)=>{

      if(transaction.dstChainId = 1){
    //ethereum
      }else if(transaction.dstChainId = 4){
    //rinkeby
      }else if(transaction.dstChainId = 137){
    //polygon mainnet
      }else if(transaction.dstChainId = 80001){
    //polygon mumbai
        let txReceipt = await axios.get(`https://api-testnet.polygonscan.com/api?module=proxy&action=eth_getTransactionReceipt&txhash=${hash}&apikey=41KESIMFVYKEKK9WW3EPTMKRQ32FIAVCS6`);
        let logsArray = txReceipt.data.result.logs;
        transaction.tokenAddress = logsArray[0].address;
        transaction.tokenValue =  parseInt(logsArray[0].data, 16)/1e18;
        transaction.fromAddress = ethers.utils.defaultAbiCoder.decode(['address'], logsArray[0].topics[1])[0]
        transaction.toAddress = ethers.utils.defaultAbiCoder.decode(['address'], logsArray[0].topics[2])[0]

      }else if(transaction.dstChainId = 56){
    //Bsc mainnet
    
      }else if(transaction.dstChainId = 97){
        //Bsc testnet 
        let txReceipt = await axios.get(`https://api-testnet.bscscan.com/api?module=proxy&action=eth_getTransactionReceipt&txhash=${hash}&apikey=YourApiKeyToken`);
        let logsArray = txReceipt.data.result.logs;
        transaction.tokenAddress = logsArray[0].address;
        transaction.tokenValue =  parseInt(logsArray[0].data, 16)/1e18;
        transaction.fromAddress = ethers.utils.defaultAbiCoder.decode(['address'], logsArray[0].topics[1])[0]
        transaction.toAddress = ethers.utils.defaultAbiCoder.decode(['address'], logsArray[0].topics[2])[0]

      }

}

const getInfoFromSendTransaction = async () =>{

  
      if(transaction.srcChainId = 1){
    //ethereum
      }else if(transaction.srcChainId = 4){
    //rinkeby
      }else if(transaction.srcChainId = 137){
    //polygon mainnet
      }else if(transaction.srcChainId = 80001){
    //polygon mumbai
        let txReceipt = await axios.get(`https://api-testnet.polygonscan.com/api?module=proxy&action=eth_getTransactionReceipt&txhash=${hash}&apikey=41KESIMFVYKEKK9WW3EPTMKRQ32FIAVCS6`);
        let logsArray = txReceipt.data.result.logs;
        transaction.tokenAddress = logsArray[1].address;
        transaction.tokenValue =  parseInt(logsArray[0].data, 16)/1e18;
        transaction.fromAddress = ethers.utils.defaultAbiCoder.decode(['address'], logsArray[0].topics[1])[0]
        transaction.toAddress = ethers.utils.defaultAbiCoder.decode(['address'], logsArray[0].topics[2])[0]

      }else if(transaction.srcChainId = 56){
    //Bsc mainnet
    
      }else if(transaction.srcChainId = 97){
        //Bsc testnet 
        let txReceipt = await axios.get(`https://api-testnet.bscscan.com/api?module=proxy&action=eth_getTransactionReceipt&txhash=${hash}&apikey=YourApiKeyToken`);
        let logsArray = txReceipt.data.result.logs;
        transaction.tokenAddress = logsArray[1].address;
        transaction.tokenValue =  parseInt(logsArray[0].data, 16)/1e18;
        transaction.fromAddress = ethers.utils.defaultAbiCoder.decode(['address'], logsArray[0].topics[1])[0]
        transaction.toAddress = ethers.utils.defaultAbiCoder.decode(['address'], logsArray[0].topics[2])[0]

      }
}

// app.use(cors()) 






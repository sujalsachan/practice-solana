import { 
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
    LAMPORTS_PER_SOL
} from "@solana/web3.js"
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import 'prompt-sync';
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const recieverPublicKey: string = prompt("Please enter Recievers wallet address :");

if(recieverPublicKey == "") {
    console.log("No Public Key entered.");
    process.exit(1);
}

const amountToTransfer: string = prompt("Please enter amount of Sol to transfer :");

if(amountToTransfer == "") {
    console.log("No Amount entered.");
    process.exit(1);
}

const amountToTransferNum = Number(amountToTransfer) * LAMPORTS_PER_SOL;

const senderKey = getKeypairFromEnvironment("SECRET_KEY");

const toPubkey = new PublicKey(recieverPublicKey);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const transaction = new Transaction();

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey : senderKey.publicKey,
    toPubkey,
    lamports : amountToTransferNum,
})

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKey
] );

console.log(`Finished! Sent ${amountToTransfer} to the address ${toPubkey}`);
console.log(`Transaction signature is ${signature}`);
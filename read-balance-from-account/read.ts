import { config } from "dotenv";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

config();

const publicKeyString = process.env.PUBLIC_KEY;
if (!publicKeyString) {
  throw new Error("Missing PUBLIC_KEY in .env file");
}

const publicKey = new PublicKey(publicKeyString);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);




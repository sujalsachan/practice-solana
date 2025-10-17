# 💸 Solana Transaction Demo

This project demonstrates how to **send SOL transactions** on the **Solana Devnet** using `@solana/web3.js`.

I implemented this on my own using the **secret key stored in the `.env` file**.

## ⚙️ Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env` file:
   ```
   SECRET_KEY=[your secret key array]
   ```

## 🚀 Run
```bash
npx esrun transfer.ts <destination_wallet_address>
```

## 🧩 What It Does
- Loads your wallet from `.env`
- Connects to Solana Devnet
- Creates and sends a **SOL transfer transaction**
- Logs the **transaction signature**

## 🔍 Verify
Check your transaction on [Solana Explorer (Devnet)](https://explorer.solana.com/?cluster=devnet).

---

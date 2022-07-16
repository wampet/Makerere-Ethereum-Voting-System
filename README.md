# Makerere Ethereum Blockchain Voting

A decentralized voting system for Makerere University based on Ethereum blockchain technology.

> This is a final year project that has been worked on by Andrew Ssempangi and Wamanga Peter under the supervison
of Dr. Ronald Kizito and Ms. Carol Ovon.

## System Workflow

A brief explanation on the basic workflow of the application.

- The Admin will create a voting instance by launching/deploying the system in a blockchain network (EVM), then create an election instance and start the election with the details of the election filled in (including candidates for voters to vote).
- Then the likely voters connect to the same blockchain network register to become a voter. Once the users successfully register, their respective details are sent/displayed in the admins' panel (i.e. verification page).
- The admin then will check if the registration information (blockchain account address, name, and phone number) is valid and matches with his record. If yes, then the admin approves the registered user making them eligible to take part and cast their respective vote in the election.
- The registered user (voter) following the approval from the admin casts their vote to the candidate of interest (from the voting page).
- After some time, depending on the scale of the election the admin ends the election. As that happens the voting is closed and the results are displayed announcing the winner at the top of the results page.



---

## Setting up the development environment

### Requirements
Thee following are some of the requirements for running the application on your localhost. Follow the links to download
the requirements.

- [Node.js](https://nodejs.org)
- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://github.com/trufflesuite/ganache-cli) (Cli)
- [Metamask](https://metamask.io/) (Browser Extension)

#### Getting the requirements

1. Download and install **NodeJS**

   Download and install NodeJS from [here](https://nodejs.org/en/download/ "Go to official NodeJS download page.").

1. Install **truffle** and **ganache-cli** using node packager manager (npm)

   ```shell
   npm install -g truffle
   npm install -g ganache-cli
   ```

1. Install **metamask** browser extension

   Download and install metamask from [here](https://metamask.io/download "Go to official metamask download page.").

### Configuring the project for development

1. Clone this repository

   ```shell
   cd dVoting
   ```

1. Run local Ethereum blockchain: Open command prompt and run the command below
   ```shell
   ganache-cli
   ```

   > Note: Do not close `ganache-cli` (the blockchain network needs to be running all the time)

1. Configure metamask on the browser with the following details

   New RPC URL: `http://localhost:8545`  
   Chain ID: `1337`

1. Import account(s) using private keys from ganache-cli to the metamask extension on the browser

1. Deploy smart contract to the (local) blockchain network (i.e ganache-cli)

   ```shell
   # on the dVoting directory
   truffle migrate
   ```

   > Note: Use `truffle migrate --reset` for re-deployments

1. Launch the development server (frontend)

   ```shell
   cd client
   npm install
   npm start
   ```

## To-Do List
Add Email send email feature to both the voters and the candidates
Add graphs to indicate who is laeading in a graphical way
To make the registration and Admin work more automatic than it is right now

Made by Andrew Ssempangi and Wamanga Peter
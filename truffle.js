const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "4dcf624bca214e6182bf0f247d20c8a4";
const mnemonic = "brass cup famous coconut cheap click cradle know health symptom boost define";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
        provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,
        gas: 4500000, // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000        
    }
  },
  compilers: {
      solc: {
          version: "^0.4.23"
      }
  }
};

// https://ropsten.infura.io/v3/2d458e6d02e5460eaf16974128dfac74

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://ropsten.infura.io/v3/2d458e6d02e5460eaf16974128dfac74',
      accounts: ['8de02eb8dff664a2e9cdc884f5ce4da496e0fec2d48c8ef4dfee96c99683a0dd']
    }
  }
}
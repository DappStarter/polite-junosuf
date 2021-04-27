require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan release stick social inflict private metal general'; 
let testAccounts = [
"0x0ebf24df83b6c1bf58df4680a736b8e639c91456bfa6e1c5d9e8198a8a7472bc",
"0x5af13e61f23a283afd0d4c0f36d6034c5314bd22259010aa48999fe74d30ede3",
"0x9509353d58c50c71b396f3f0df03fdca59371ff325ba338a937edd5bde4a525b",
"0x92854fcbc13e51c73583af08fde8b63fd5f865f8035ba84cf800c755d9708e13",
"0x970f8a80c38be33dfe1cdb4a5ab4b494398add5ed6bd25fa32b898e570686aef",
"0x13db8a0a4a48f5eef4153f06562fb736a7743a514c1441d6ee81effe1b83c5b7",
"0x410eea158dcb0108b063c384dc0d9893f0a74a7f320a2501558b2b6d3e23a70a",
"0x564b9334db88fe328f75bd33a95d9847c80bbe8ce325f6a3043d60550d5dc77e",
"0xe9d9ed292a873d5824499acb42c59d7789d4701f847edfa4862557d18da537cf",
"0x0e91db30b1fd1caf8e8245aab8293a87a586f8d8edeeb3b0ef885c9ed255dfbb"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

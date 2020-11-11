require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember come grace force fortune story'; 
let testAccounts = [
"0x202dc04fec29820d5a0c1e1533d30e9eb9df852be6497d3dfdd2263c42d128f9",
"0x2f72f9563c262b8fede2fd8693c94405b462948c251e9f9e8b7dde535ac97504",
"0x41835a4d8e7504b2a24d046da72e032f5317d0d91d7aba8cdbe94f01452fefa6",
"0xb386c984afed822071716660bab112b6de6d0b995208eefda861d491accc8c0e",
"0x60a6aa4fce0b8a4a073ea978a06ce9598e16713fba6601579bb7a96fa8cfadd4",
"0x3e205f94cf73394a0e603a26510bc8c29bf7bdcddb97a29826444c9a194e7474",
"0x5dd014e1716742ef1161a49326dfae637268044d5302da87c36fbff4b3421700",
"0x32dcbeb12ebd11836e529e08a4814a316825ac74dc360c073d94022009ecfa06",
"0x8687acf7094d85629ba091b090d278418fc6b214176b49339b4f3b2add95fa29",
"0x8b2ac2893a46adabe6d21b58f3cf5ec4a369bd1ef48dd386b1e0df4b55c906a6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

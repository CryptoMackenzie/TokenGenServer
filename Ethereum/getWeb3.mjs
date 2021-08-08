import HDWalletProvider from 'truffle-hdwallet-provider'
import Web3 from 'web3'

const getWeb3 = () => {
    const provider = new HDWalletProvider(
        '39a4c30da10cb36d2e3099ff501e6156659c276a0313d55c854d06571d25589e',
        'https://bsc-dataseed.binance.org/',
    );
    
    
    const web3 = new Web3(provider);
    return web3
}

export { getWeb3 }

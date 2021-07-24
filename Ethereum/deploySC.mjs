
import fs from 'fs'
import fs_extra from 'fs-extra'
import path from 'path'
import contractManager from './contractManager.mjs';
import { getWeb3 } from './getWeb3.mjs'
import writeAddress from './writeAddress.mjs'

const web3 = getWeb3()


const buildPath = path.resolve('Ethereum','build');  


const deploySC = async() => {
    
    const contractFile = fs.readFileSync(path.resolve(buildPath, 'Token.json'))
    const contractJson = JSON.parse(contractFile)

    const accounts = await web3.eth.getAccounts();

    console.log(`Attempting to deploy from account: ${accounts[0]}`);

    const deployedContract = await new web3.eth.Contract(contractJson.abi)
        .deploy({
            data: '0x' + contractJson.evm.bytecode.object,
        })
        .send({
            from: accounts[0],
            gas: '8000000'
        })

    console.log(
        `Contract deployed at address: ${deployedContract.options.address}`
    );
    writeAddress(deployedContract.options.address)
}



export default deploySC




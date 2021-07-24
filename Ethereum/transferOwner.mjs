import fs from 'fs'
import fs_extra from 'fs-extra'
import path from 'path'
import contractManager from './contractManager.mjs';
import { getWeb3 } from './getWeb3.mjs'

const web3 = getWeb3()


const buildPath = path.resolve('Ethereum','build');

const transferOwner = async(to_address,token_address) => {
    const deployedContract = await new web3.eth.Contract(contractJson.abi,token_address)


    
}

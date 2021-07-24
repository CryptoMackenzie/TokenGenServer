import fs from 'fs'
import fs_extra from 'fs-extra'
import path from 'path'

const buildPath = path.resolve('Ethereum','build');  
const contractsFolderPath = path.resolve('Ethereum','contracts');

const contractJsonHandler = () => {
    const contractFile = fs.readFileSync(path.resolve(buildPath, 'Token.json'))
    const contractJson = JSON.parse(contractFile)
    return contractJson
}


export default contractJsonHandler
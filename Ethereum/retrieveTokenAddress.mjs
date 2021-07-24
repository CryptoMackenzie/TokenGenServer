import path from 'path'
import fs from 'fs'


const TokenPath = path.resolve('Ethereum','TokenAddress');

const retrieveTokenAddress = () => {
    const tokenFile = fs.readFileSync(path.resolve(TokenPath, 'Token.json'))
    const tokenJson = JSON.parse(tokenFile)
    console.log(tokenJson)
    const tokenAddress = tokenJson.Address
    console.log(tokenAddress)
    return tokenAddress
}

export default retrieveTokenAddress

import fs_extra from 'fs-extra'
import * as path from 'path'



const buildPath = path.resolve('Ethereum','TokenAddress');

const writeAddress = (TokenAddress) => {
    fs_extra.outputJsonSync(path.resolve(buildPath,'Token.json'),{"Address" : TokenAddress })
}

export default writeAddress

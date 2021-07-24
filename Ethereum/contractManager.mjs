import fs from 'fs'
import path from 'path'


const contractManager = (TokenName,TokenSymbol,Decimals,InitialSupply,TransactionTax) => {
    const params = ['TokenName','TokenSymbol','Decimals','InitialSupply','TransactionTax']
    const param_values = [TokenName,TokenSymbol,Decimals,InitialSupply,TransactionTax]
    const contract_Temp_Path = path.resolve('Ethereum','Contract_templates')
    const contract_Temp_File_Path = path.resolve(contract_Temp_Path,'Token.sol')
    var contract_temp_File = fs.readFileSync(path.resolve(contract_Temp_File_Path),"utf8")
    for (let i=0; i < params.length; i++) {
        contract_temp_File = contract_temp_File.replace(params[i],param_values[i])
    }
    const contract_folder = path.resolve('Ethereum','contracts')
    fs.writeFileSync(path.resolve(contract_folder,'Token.sol'),contract_temp_File)
    console.log('File Succesfully written')
}

export default contractManager
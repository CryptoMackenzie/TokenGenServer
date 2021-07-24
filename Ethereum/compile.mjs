import solc from "solc";
import * as path from 'path'
import { buildSources } from "./compile-pre.mjs";
import fs_extra from 'fs-extra'


const input = {
	language: 'Solidity',
	sources: buildSources(),
	settings: {
		outputSelection: {
			'*': {
				'*': [ 'abi', 'evm.bytecode' ]
			}
		}
	}
}



const buildPath = path.resolve('Ethereum','build');
const compileContracts = () => {

    const compiledContracts = JSON.parse(solc.compile(JSON.stringify(input))).contracts
    console.log(compiledContracts)
	
	for (let contract in compiledContracts) {
		for(let contractName in compiledContracts[contract]) {
			fs_extra.outputJsonSync(
				path.resolve(buildPath, `${contractName}.json`),
				compiledContracts[contract][contractName],
				{
					spaces: 2
				}
			)
		}
	}
	console.log("Contract compile successful")
}

export default compileContracts

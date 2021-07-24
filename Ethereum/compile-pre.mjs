import * as path from 'path'
import * as fs from 'fs'
import * as fs_extra from 'fs-extra';


const buildPath = path.resolve('Ethereum','build');
const contractsFolderPath = path.resolve('Ethereum','contracts');



const buildSources = () => {
	const sources = {};
	const contractsFiles = fs.readdirSync(contractsFolderPath);

	contractsFiles.forEach(file => {
		const contractFullPath = path.resolve(contractsFolderPath, file);
		sources[file] = {
			content: fs.readFileSync(contractFullPath, 'utf8')
		};
	});
	return sources
}



export {buildSources}


const path = require('path');
const { loadEnvFiles } = require('./env-loader');

const rootDir = path.resolve(__dirname, '..');
loadEnvFiles(rootDir);

const command = process.argv[2];
if (!command) {
  throw new Error('Debes indicar un comando de react-scripts.');
}

process.argv = [process.argv[0], process.argv[1], command, ...process.argv.slice(3)];
require('react-scripts/bin/react-scripts');

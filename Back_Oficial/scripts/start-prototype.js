const { spawn } = require('child_process');
const path = require('path');

const children = [];
const rootDir = path.resolve(__dirname, '..');

startApi();
startClient();

function startApi() {
  const api = spawn(process.execPath, ['server.js'], {
    cwd: rootDir,
    env: {
      ...process.env,
      NODE_ENV: 'development',
      API_PORT: process.env.API_PORT || '3001',
    },
    stdio: 'inherit',
  });

  children.push(api);
}

function startClient() {
  const reactScriptsBin = require.resolve('react-scripts/bin/react-scripts.js', {
    paths: [rootDir],
  });

  const client = spawn(process.execPath, [reactScriptsBin, 'start'], {
    cwd: rootDir,
    env: {
      ...process.env,
      PORT: process.env.PORT || '3000',
      BROWSER: process.env.BROWSER || 'none',
    },
    stdio: 'inherit',
  });

  children.push(client);
}

function shutdown(signal) {
  for (const child of children) {
    if (!child.killed) {
      child.kill(signal);
    }
  }
  process.exit(0);
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

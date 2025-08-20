// backend/start-frontend.js
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendPath = path.join(__dirname, '..', 'frontend');

console.log(`Starting frontend from: ${frontendPath}`);

const frontend = spawn('npm', ['start'], {
  cwd: frontendPath,
  stdio: 'inherit',
  shell: true
});

frontend.on('error', (error) => {
  console.error('Failed to start frontend:', error);
});

frontend.on('close', (code) => {
  console.log(`Frontend process exited with code ${code}`);
});
const fs = require('fs');
const path = require('path');

const FRONTEND_URL = "https://zerodha-mocha.vercel.app";

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace localhost:3000 with FRONTEND_URL
  content = content.replace(/http:\/\/localhost:3000/g, FRONTEND_URL);
  
  fs.writeFileSync(filePath, content, 'utf8');
}

const files = [
  'frontend/src/components/Holding.js',
  'frontend/src/components/Menu.js',
  'backend/index.js',
  'dashboard/src/components/Holding.js',
  'dashboard/src/components/Menu.js',
];

files.forEach(file => replaceInFile(path.join(__dirname, file)));
console.log('Frontend URLs updated!');

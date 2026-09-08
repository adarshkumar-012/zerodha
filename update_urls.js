const fs = require('fs');
const path = require('path');

const BACKEND_URL = "https://zerodha-backend-s8sx.onrender.com";
const DASHBOARD_URL = "https://zerodha-dashboard-h9fx.onrender.com";

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace localhost:3002 with BACKEND_URL
  content = content.replace(/http:\/\/localhost:3002/g, BACKEND_URL);
  
  // Replace localhost:3001 with DASHBOARD_URL
  content = content.replace(/http:\/\/localhost:3001/g, DASHBOARD_URL);
  
  fs.writeFileSync(filePath, content, 'utf8');
}

const files = [
  'frontend/src/landing_page/signup/Signup.js',
  'frontend/src/landing_page/login/Login.js',
  'frontend/src/components/Holding.js',
  'frontend/src/components/Menu.js',
  'frontend/src/components/BuyActionWindow.js',
  'backend/index.js',
  'dashboard/src/components/BuyActionWindow.js',
  'dashboard/src/components/Holding.js',
  'dashboard/src/components/Menu.js',
  'dashboard/src/components/Orders.js',
  'dashboard/src/components/Positions.js',
  'dashboard/src/components/SellActionWindow.js'
];

files.forEach(file => replaceInFile(path.join(__dirname, file)));
console.log('URLs updated!');

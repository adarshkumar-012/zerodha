const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/landing_page/about/Team.js',
  'src/landing_page/home/Awards.js',
  'src/landing_page/home/Education.js',
  'src/landing_page/home/Pricing.js',
  'src/landing_page/home/Stats.js',
  'src/landing_page/login/Login.js',
  'src/landing_page/pricing/Brokerage.js',
  'src/landing_page/pricing/Hero.js',
  'src/landing_page/products/Hero.js',
  'src/landing_page/products/LeftSection.js',
  'src/landing_page/products/RightSection.js'
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix redundant alt tag issue
  content = content.replace(/alt="image"/g, 'alt="logo"');

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Fixes applied.');

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

  // Fix img missing alt
  content = content.replace(/<img([^>]*?)(?<!alt="[^"]*")(?<!alt='[^']*')(?<!alt=[^ ]*)(\/?)>/g, (match, p1, p2) => {
    if (match.includes('alt=')) return match;
    return `<img${p1} alt="image"${p2}>`;
  });

  // Fix invalid hrefs
  content = content.replace(/href=""/g, 'href="#/"');
  content = content.replace(/href="#"/g, 'href="#/"');
  
  // Fix unused navigate in Login.js
  if (file.includes('Login.js')) {
    content = content.replace(/import\s*\{\s*Link\s*,\s*useNavigate\s*\}\s*from\s*['"]react-router-dom['"];/, 'import { Link } from "react-router-dom";');
    content = content.replace(/const\s+navigate\s*=\s*useNavigate\(\);\s*/, '');
  }

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Fixes applied.');

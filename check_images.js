const fs = require('fs');
const path = require('path');

const dir = './src/app';
const folders = fs.readdirSync(dir).filter(f => f.endsWith('-yangin-egitimi'));

let report = [];
let totalMissing = 0;

folders.forEach(f => {
  const pagePath = path.join(dir, f, 'page.tsx');
  if(!fs.existsSync(pagePath)) return;
  
  const content = fs.readFileSync(pagePath, 'utf8');
  const imgMatches = [...content.matchAll(/src=["'](\/images\/districts\/[^"']+)["']/g)];
  
  const urls = imgMatches.map(m => m[1]);
  const uniqueUrls = [...new Set(urls)];
  
  if(uniqueUrls.length < 3) {
    totalMissing++;
    
    // figure out which images are present
    report.push({
      districtStr: f.replace('-yangin-egitimi', ''),
      pagePath: pagePath.replace(/\\/g, '/'),
      imagesPresent: uniqueUrls.length,
      urls: uniqueUrls
    });
  }
});

console.log(JSON.stringify({
  totalDistrictsChecked: folders.length,
  totalNeedingFix: totalMissing,
  details: report
}, null, 2));

const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\noxsus\\.gemini\\antigravity\\brain\\5a92c58a-39ee-4994-9947-f52042e1aaaf';
const publicDir = './public/images/districts';

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Map of artifacts to use as a shared high-quality visual pool
const baseImages = {
  'fabrika-yangin-tatbikati.jpg': 'drill_scenario_factory_1774394951906.png',
  'ofis-yangin-egitimi.jpg': 'karsiyaka_hero_ofis_1774399989807.png',
  'santiye-arama-kurtarma.jpg': 'bornova_arama_kurtarma_1774399779298.png',
  'meydan-yangin-sondurme.jpg': 'fire_drill_outdoor_1774394396338.png',
  'okul-tahliye-tatbikati.jpg': 'evacuation_drill_1774391500910.png',
  'hastane-acil-durum.jpg': 'emergency_response_1774395872133.png',
  'salon-yangin-egitimi.jpg': 'classroom_training_1774394379534.png',
  'deprem-tahliye-uygulamasi.jpg': 'earthquake_evacuation_1774395504954.png',
  'sanayi-yangin-guvenligi.jpg': 'bornova_hero_sanayi_1774399588063.png',
  'isyeri-pratik-tatbikat.jpg': 'bornova_tatbikat_isyeri_1774399709240.png',
  'genel-tatbikat.jpg': 'evacuation_drill_team_1774394939274.png',
  'karsiyaka-salon.jpg': 'karsiyaka_egitim_salon_1774400002571.png',
  'karsiyaka-sondurme.jpg': 'karsiyaka_sondurme_1774400017985.png',
  'takim-ici-egitim.jpg': 'team_training_room_1774392045151.png'
};

// Copy images to public dir so next.js can serve them
for (const [cleanName, artifactName] of Object.entries(baseImages)) {
  const src = path.join(brainDir, artifactName);
  const dest = path.join(publicDir, cleanName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  } else {
    console.error("Missing artifact: " + src);
  }
}

// Logic to map missing URL cleanly to the best existing high-quality image
function getBestFallback(brokenName) {
  const n = brokenName.toLowerCase();
  if (n.includes('fabrika') || n.includes('osb') || n.includes('tekstil') || n.includes('gida') || n.includes('depo') || n.includes('mandira') || n.includes('sera')) return '/images/districts/fabrika-yangin-tatbikati.jpg';
  if (n.includes('sanayi') || n.includes('atölye') || n.includes('oto') || n.includes('mobilya')) return '/images/districts/sanayi-yangin-guvenligi.jpg';
  if (n.includes('ofis') || n.includes('plaza') || n.includes('avm') || n.includes('ticaret')) return '/images/districts/ofis-yangin-egitimi.jpg';
  if (n.includes('santiye') || n.includes('maden') || n.includes('enerji') || n.includes('res') || n.includes('liman')) return '/images/districts/santiye-arama-kurtarma.jpg';
  if (n.includes('okul') || n.includes('kolej') || n.includes('yurt') || n.includes('egitim')) return '/images/districts/okul-tahliye-tatbikati.jpg';
  if (n.includes('hastane') || n.includes('klinik') || n.includes('otel') || n.includes('turizm') || n.includes('tesis')) return '/images/districts/hastane-acil-durum.jpg';
  if (n.includes('deprem')) return '/images/districts/deprem-tahliye-uygulamasi.jpg';
  if (n.includes('tatbikat') || n.includes('tahliye') || n.includes('sondurme') || n.includes('kurtarma')) return '/images/districts/meydan-yangin-sondurme.jpg';
  if (n.includes('egitim') || n.includes('seminer')) return '/images/districts/salon-yangin-egitimi.jpg';
  return '/images/districts/genel-tatbikat.jpg';
}

const dir = './src/app';
const folders = fs.readdirSync(dir).filter(f => f.endsWith('-yangin-egitimi'));
let report = [];

folders.forEach(f => {
  const pagePath = path.join(dir, f, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;
  
  let content = fs.readFileSync(pagePath, 'utf8');
  let changed = false;
  
  // Find all <Image src="..."> references to /images/districts/
  const imgMatches = [...content.matchAll(/src=["'](\/images\/districts\/[^"']+)["']/g)];
  let uniqueMatches = [...new Set(imgMatches.map(m => m[1]))];

  uniqueMatches.forEach(imgPath => {
    let fullLocalPath = path.join('./public', imgPath);
    // If the referenced file doesn't exist
    if (!fs.existsSync(fullLocalPath)) {
      // It's a broken reference, map it
      let fallback = getBestFallback(imgPath);
      report.push(`- Broken Ref: \`${imgPath}\` | Fixed To: \`${fallback}\``);
      // Replace all occurrences of this broken path in the file
      content = content.replace(new RegExp(imgPath.replace(/\//g, '\\/'), 'g'), fallback);
      changed = true;
    }
  });
  
  if (changed) {
    fs.writeFileSync(pagePath, content, 'utf8');
  }
});

fs.writeFileSync('audit_report.md', report.join('\n'));
console.log(`Successfully fixed ${report.length} broken image references across ${folders.length} pages.`);

const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        walk(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const targetDir = path.join(__dirname, 'src', 'app');
if (!fs.existsSync(targetDir)) {
  console.error("Directory not found:", targetDir);
  process.exit(1);
}

const files = walk(targetDir);
let changedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Regex to match FAQ arrays declaration block
  // matches: const serviceFAQ = [ ... ];
  const faqRegex = /(?:const|let|var)\s+\w*faq\w*\s*=\s*\[([\s\S]*?)\];/gi;

  newContent = newContent.replace(faqRegex, (match, arrayContent) => {
    // Replace `description:` with `answer:`
    const replacedArray = arrayContent.replace(/\bdescription\s*:/g, 'answer:');
    return match.replace(arrayContent, replacedArray);
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    changedFiles++;
    console.log('Updated', file);
  }
}

console.log(`Updated ${changedFiles} files.`);

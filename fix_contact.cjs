const fs = require('fs');
let content = fs.readFileSync('./src/components/Contact.tsx', 'utf8');
content = content.replace(/^[0-9]+:\s/gm, '');
fs.writeFileSync('./src/components/Contact.tsx', content);
console.log("Fixed Contact.tsx");

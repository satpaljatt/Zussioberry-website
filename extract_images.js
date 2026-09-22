const fs = require('fs');
const html = fs.readFileSync('about-us.html', 'utf8');
const matches = [...html.matchAll(/https:\/\/frappe\.qodeinteractive\.com\/[^"'\s]+\.(?:png|jpg)/gi)];
console.log([...new Set(matches.map(m => m[0]))].join('\n'));

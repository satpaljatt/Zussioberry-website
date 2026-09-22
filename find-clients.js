const fs = require('fs');
const html = fs.readFileSync('about-us.html', 'utf8');
const matches = [...html.matchAll(/https:\/\/frappe\.qodeinteractive\.com\/wp-content\/uploads\/\d{4}\/\d{2}\/[^\s"']+/gi)];
const uniqueUrls = [...new Set(matches.map(m => m[0]))];
console.log(uniqueUrls.join('\n'));

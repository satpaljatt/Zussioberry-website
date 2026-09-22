const fs = require('fs');
const html = fs.readFileSync('about-us.html', 'utf8');
const matches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];
const uniqueUrls = [...new Set(matches.map(m => m[1]))];
uniqueUrls.forEach(url => console.log(url));

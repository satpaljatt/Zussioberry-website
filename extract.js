const fs = require('fs');
const html = fs.readFileSync('about-us.html', 'utf16le');
const match = html.match(/<div[^>]*class="[^"]*vc_row-fluid[^"]*"[^>]*>[\s\S]*?h2-carousel-img-5\.png[\s\S]*?(?=<div[^>]*class="[^"]*vc_row-fluid[^"]*"|<\/body>)/i);
if(match) {
    fs.writeFileSync('brand-strip.html', match[0], 'utf8');
    console.log('Saved to brand-strip.html');
}

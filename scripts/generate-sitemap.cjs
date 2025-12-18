// scripts/generate-sitemap.js

const fs = require('fs');
const axios = require('axios');

const BASE_URL = 'https://kevin-tofu.github.io';
const WP_API_URL = 'https://eye.kohei-kevin.com/wp-json/wp/v2/posts?per_page=100';

(async () => {
  const posts = await axios.get(WP_API_URL).then(res => res.data);

  const urls = posts.map(post => `
  <url>
    <loc>${post.link}</loc>
    <lastmod>${post.modified}</lastmod>
    <priority>0.8</priority>
  </url>`);


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <priority>1.0</priority>
  </url>${urls.join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap, 'utf8');
  console.log('✅ sitemap.xml generated!');
})();

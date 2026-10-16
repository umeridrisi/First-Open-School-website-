const fs = require('fs');
const path = require('path');

const dir = './src/data/poems';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  // strip types import
  content = content.replace(/import\s+.*?;\s*/g, '');
  content = content.replace(/export\s+const\s+\w+:\s*Poem\[\]\s*=\s*/g, 'module.exports = ');
  
  const tmpFile = path.join('/tmp', file.replace('.ts', '.js'));
  fs.writeFileSync(tmpFile, content);
  
  try {
    delete require.cache[require.resolve(tmpFile)];
    const poems = require(tmpFile);
    console.log(`\n=================== FILE: ${file} (${poems.length} poems) ===================`);
    
    poems.forEach(p => {
      const stanzaCount = p.stanzas ? p.stanzas.length : 0;
      const lineCounts = (p.stanzas || []).map(s => s.length);
      const isShort = stanzaCount < 2;
      const issues = [];
      
      if (isShort) issues.push('ONLY 1 STANZA');
      
      // Check line lengths and contents
      (p.stanzas || []).forEach((s, sIdx) => {
        if (s.length < 3) issues.push(`Stanza ${sIdx+1} has only ${s.length} lines`);
        s.forEach((l, lIdx) => {
          if (l.includes('...') || l.includes('TODO')) issues.push(`S${sIdx+1}L${lIdx+1} has placeholder: "${l}"`);
        });
      });
      
      console.log(`- [${p.id}] "${p.title}" | stanzas: ${stanzaCount} (${lineCounts.join(',')}) ${issues.length ? '⚠️ ' + issues.join('; ') : '✅'}`);
    });
  } catch (err) {
    console.error(`Error loading ${file}:`, err.message);
  }
});

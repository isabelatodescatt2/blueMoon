const fs = require('fs');
const path = require('path');

// Função para corrigir referências nos arquivos HTML e JS
function fixAssetPaths(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixAssetPaths(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Corrige caminhos de assets
      content = content.replace(/"\/assets\//g, '"./assets/');
      content = content.replace(/'\/assets\//g, "'./assets/");
      content = content.replace(/\(\\?\/assets\//g, '(./assets/');
      
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
}

// Executa a correção
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  fixAssetPaths(distPath);
  console.log('✅ Asset paths fixed for GitHub Pages!');
} else {
  console.log('❌ dist folder not found');
}

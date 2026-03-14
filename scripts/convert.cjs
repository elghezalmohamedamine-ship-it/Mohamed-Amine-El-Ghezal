const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = path.join(process.cwd(), 'public/images');
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.startsWith('photo') && (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.webp'))) {
    const filePath = path.join(dir, file);
    const match = file.match(/photo(\d+)/);
    if (match) {
      const num = match[1];
      const newFileName = `photo${num}.webp`;
      const tempPath = path.join(dir, `temp_${newFileName}`);
      
      console.log(`Converting ${file} to ${newFileName}...`);
      try {
        // Convert to WebP, resize to max 1200px width, quality 80
        execSync(`npx -y sharp-cli -i "${filePath}" -o "${tempPath}" -q 80 resize 1200`);
        
        // Remove old file
        fs.unlinkSync(filePath);
        
        // Rename temp to new
        fs.renameSync(tempPath, path.join(dir, newFileName));
        
        console.log(`Successfully converted to ${newFileName}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err.message);
      }
    }
  }
}
console.log('Done converting images!');

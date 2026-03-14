import fs from 'fs';

const files = [
  'photo1.png',
  'photo2.webp',
  'photo3.webp',
  'photo4.png',
  'photo5.webp',
  'photo6.webp',
  'photo7.webp',
  'photo8.webp',
  'photo9.webp',
  'photo10.jpg'
];

let out = '';
for (const f of files) {
  const b64 = fs.readFileSync('public/images/' + f).toString('base64');
  const ext = f.split('.').pop();
  const mime = ext === 'jpg' ? 'image/jpeg' : ext === 'png' ? 'image/png' : 'image/webp';
  out += `export const ${f.split('.')[0]} = 'data:${mime};base64,${b64}';\n`;
}

fs.writeFileSync('src/image-data.ts', out);
console.log('Done!');

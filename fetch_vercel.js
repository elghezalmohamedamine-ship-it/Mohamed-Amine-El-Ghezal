import https from 'https';
https.get('https://mohamed-amine-el-ghezal.vercel.app/images/photo1.jpg.png', (res) => {
  let data = Buffer.alloc(0);
  res.on('data', (chunk) => data = Buffer.concat([data, chunk]));
  res.on('end', () => {
    console.log('Data:', data.toString('hex'));
    console.log('String:', data.toString('utf8'));
    process.exit(0);
  });
});

const Jimp = require('jimp');

async function swapColors() {
  try {
    const image = await Jimp.read('public/images/logo.png');
    
    // Find the "red" color by averaging all non-white, non-transparent pixels
    let rSum = 0, gSum = 0, bSum = 0, count = 0;
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];
      
      if (a > 50) {
        // If not white-ish
        if (!(r > 200 && g > 200 && b > 200)) {
          rSum += r;
          gSum += g;
          bSum += b;
          count++;
        }
      }
    });
    
    let targetR = 220, targetG = 38, targetB = 38; // fallback to climb-red
    if (count > 0) {
      targetR = Math.round(rSum / count);
      targetG = Math.round(gSum / count);
      targetB = Math.round(bSum / count);
      console.log(`Detected logo color: rgb(${targetR}, ${targetG}, ${targetB})`);
    }

    // Now swap
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];
      
      if (a > 0) {
        // We want to map White (255,255,255) to TargetColor
        // and TargetColor to White (255,255,255)
        // Using the linear formula: C' = -C + C_target + 255
        
        let newR = -r + targetR + 255;
        let newG = -g + targetG + 255;
        let newB = -b + targetB + 255;
        
        // Clamp
        newR = Math.max(0, Math.min(255, newR));
        newG = Math.max(0, Math.min(255, newG));
        newB = Math.max(0, Math.min(255, newB));
        
        this.bitmap.data[idx + 0] = newR;
        this.bitmap.data[idx + 1] = newG;
        this.bitmap.data[idx + 2] = newB;
      }
    });
    
    await image.writeAsync('public/images/logo_inverted.png');
    console.log('Successfully created logo_inverted.png');
  } catch (err) {
    console.error('Error:', err);
  }
}

swapColors();

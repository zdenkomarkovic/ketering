const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Kreiranje OG slike (1200x630)
async function createOGImage() {
  try {
    // Koristimo hero.jpg kao osnovu
    const inputPath = path.join(__dirname, '../public/images/hero.jpg');
    const outputPath = path.join(__dirname, '../public/images/og-image.jpg');
    
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 90 })
      .toFile(outputPath);
    
    console.log('✅ OG slika kreirana: og-image.jpg');
  } catch (error) {
    console.error('❌ Greška pri kreiranju OG slike:', error);
  }
}

// Kreiranje Twitter slike (1200x630)
async function createTwitterImage() {
  try {
    // Koristimo kombinaciju slika za Twitter
    const inputPath = path.join(__dirname, '../public/images/rucak.png');
    const outputPath = path.join(__dirname, '../public/images/twitter-image.jpg');
    
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 90 })
      .toFile(outputPath);
    
    console.log('✅ Twitter slika kreirana: twitter-image.jpg');
  } catch (error) {
    console.error('❌ Greška pri kreiranju Twitter slike:', error);
  }
}

// Optimizacija postojećih slika
async function optimizeImages() {
  const imagesDir = path.join(__dirname, '../public/images');
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, `optimized-${file}`);
      
      try {
        await sharp(inputPath)
          .jpeg({ quality: 80, progressive: true })
          .toFile(outputPath);
        
        console.log(`✅ Optimizovana: ${file}`);
      } catch (error) {
        console.error(`❌ Greška pri optimizaciji ${file}:`, error);
      }
    }
  }
}

// Glavna funkcija
async function main() {
  console.log('🚀 Započinjem optimizaciju slika...');
  
  await createOGImage();
  await createTwitterImage();
  // await optimizeImages(); // Odkomentariši ako želiš optimizaciju svih slika
  
  console.log('✅ Optimizacija završena!');
}

main().catch(console.error); 
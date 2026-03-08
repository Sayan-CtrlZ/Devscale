const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImages() {
    const targetWidth = 1920;
    const targetHeight = 925;
    const bg = { r: 10, g: 10, b: 12, alpha: 1 }; // Dark background color matching #0a0a0c

    const files = [
        { name: 'cafe.webp', fit: 'cover' },
        { name: 'cafe_menu.webp', fit: 'cover' },
        { name: 'cafe_mobile_view.webp', fit: 'contain' } // pad for mobile
    ];

    for (const file of files) {
        const inputPath = path.join(__dirname, 'public/cafe', file.name);
        const outputPath = path.join(__dirname, 'public/cafe', 'resized_' + file.name);

        if (fs.existsSync(inputPath)) {
            await sharp(inputPath)
                .resize({
                    width: targetWidth,
                    height: targetHeight,
                    fit: file.fit,
                    background: bg
                })
                .toFile(outputPath);
            console.log(`Processed ${file.name}`);

            // Optionally replace original
            fs.renameSync(outputPath, inputPath);
        }
    }
}

processImages().catch(console.error);

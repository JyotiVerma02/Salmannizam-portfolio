const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const highContrastLightRegex = /color:\s*#(fff|ffffff|efefef)\b;?/gi;
const mediumContrastLightRegex = /color:\s*#(d0d0d0|bcbcbc|bbbbbb|bdbdbd|9d9d9d)\b;?/gi;
const highContrastDarkRegex = /color:\s*#(111|111111|110c08)\b;?/gi;

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.css') || file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(srcDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace hardcoded white/light text with --white-color (which is black in light mode, white in dark mode)
    content = content.replace(highContrastLightRegex, 'color: var(--white-color);');

    // Replace hardcoded gray text with --text-color
    content = content.replace(mediumContrastLightRegex, 'color: var(--text-color);');

    // Replace hardcoded dark text (usually in buttons) with --black-color (white in light mode, black in dark mode)
    content = content.replace(highContrastDarkRegex, 'color: var(--black-color);');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});

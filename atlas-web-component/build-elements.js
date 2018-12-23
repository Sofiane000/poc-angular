const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/elements-build/polyfills.js',
        './dist/elements-build/runtime.js',
        './dist/elements-build/main.js',
    ];

    await fs.ensureDir('./dist/elements');

    await concat(files, './dist/elements/atlas-elements.js');

    await fs.copy('./demo.html', './dist/elements/index.html');

    console.info('Elements created successfully!');
})();

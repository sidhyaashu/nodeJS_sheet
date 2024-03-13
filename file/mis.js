// glob: It is used for matching file paths using patterns. It supports various globbing patterns like * (matches any number of characters), ? (matches a single character), [...] (matches any character in the brackets), and {...} (matches any of the comma-separated patterns).
const glob = require('glob');
// Match all JavaScript files in the current directory
glob('*.js', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Matching JavaScript files:', files);
});



// globby: It is an enhanced version of glob, providing support for promises and multiple patterns.
const globby = require('globby');
// Match all JavaScript files and JSON files in the current directory
globby(['*.js', '*.json']).then(files => {
    console.log('Matching files:', files);
}).catch(err => {
    console.error('Error:', err);
});



// fs-extra: It is an extension of the Node.js core fs module, providing additional functionality and promise-based APIs for file system operations.
const fs = require('fs-extra');
// Read a file
fs.readFile('file.txt', 'utf8')
    .then(data => {
        console.log('File content:', data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });
// Write to a file
fs.writeFile('file.txt', 'Hello, world!', 'utf8')
    .then(() => {
        console.log('File written successfully');
    })
    .catch(err => {
        console.error('Error writing to file:', err);
    });



// chokidar: It is used for watching file changes. It provides a more reliable and efficient way to watch files compared to the built-in fs.watch and fs.watchFile functions.
const chokidar = require('chokidar');
// Watch for changes in a directory
const watcher = chokidar.watch('directory', {
    ignored: /[\/\\]\./, // ignore dotfiles
    persistent: true
});
watcher
    .on('add', path => console.log('File', path, 'has been added'))
    .on('change', path => console.log('File', path, 'has been changed'))
    .on('unlink', path => console.log('File', path, 'has been removed'))
    .on('error', error => console.error('Error happened', error));
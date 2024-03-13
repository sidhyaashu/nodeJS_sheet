// Getting Directory Name and File Name:
const path = require('path');
const filePath = '/path/to/some/file.txt';

const dirname = path.dirname(filePath);
console.log('Directory name:', dirname);

const filename = path.basename(filePath);
console.log('File name:', filename);

// Resolving Relative Paths:
const path = require('path');

const relativePath = './relative/path/to/file.txt';
const absolutePath = path.resolve(relativePath);
console.log('Absolute path:', absolutePath);

// Joining Paths:
const path = require('path');

const basePath = '/path/to';
const filename = 'file.txt';

const fullPath = path.join(basePath, filename);
console.log('Full path:', fullPath);

// Normalizing Paths:
const path = require('path');

const messyPath = '/path/to/some/../file.txt';
const cleanPath = path.normalize(messyPath);
console.log('Cleaned path:', cleanPath);

// Getting Extension:
const path = require('path');

const filePath = '/path/to/some/file.txt';
const extension = path.extname(filePath);
console.log('Extension:', extension);
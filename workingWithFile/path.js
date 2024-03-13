const path = require('path');

// Example paths
const filePath1 = '/home/user/Documents/file.txt';
const filePath2 = '../images/image.png';
const relativePath1 = './directory/subdirectory/';
const relativePath2 = 'anotherDirectory';

// Joining Paths
const joinedPath = path.join('/home', 'user', 'Documents', 'file.txt');
console.log('Joined Path:', joinedPath);

// Resolving Paths
const resolvedPath = path.resolve('../', 'images', 'image.png');
console.log('Resolved Path:', resolvedPath);

// Normalizing Paths
const normalizedPath = path.normalize('/test/test1//test2/..');
console.log('Normalized Path:', normalizedPath);

// Getting the Directory Name
const dirname = path.dirname(filePath1);
console.log('Directory Name:', dirname);

// Getting the Base Name
const basename = path.basename(filePath1);
console.log('Base Name:', basename);

// Getting the Extension
const extname = path.extname(filePath1);
console.log('Extension:', extname);

// Parsing Paths
const parsedPath = path.parse(filePath1);
console.log('Parsed Path:', parsedPath);

// Formatting Paths
const formattedPath = path.format({
  root: '/ignored',
  dir: '/home/user/Documents',
  base: 'file.txt'
});
console.log('Formatted Path:', formattedPath);

// Checking if Paths are Absolute
console.log('Is Absolute Path (filePath1)?', path.isAbsolute(filePath1));
console.log('Is Absolute Path (relativePath1)?', path.isAbsolute(relativePath1));

// Calculating Relative Path
const relative = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
console.log('Relative Path:', relative);

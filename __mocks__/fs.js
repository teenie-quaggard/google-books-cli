const fs = jest.genMockFromModule('fs');
const path = require('path');

let mockFiles = Object.create(null);

// specifies what files are on the 'mock' filesystem
const __setMockFiles = newMockFiles => {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file));
  }
};

const readFile = directoryPath => {
  return mockFiles[directoryPath] || [];
};

fs.__setMockFiles = __setMockFiles;
fs.readFile = readFile;

module.exports = fs;

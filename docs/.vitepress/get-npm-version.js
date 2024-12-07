// get-npm-version.js
const { execSync } = require('child_process');

function getNpmVersion() {
  return execSync('npm --version').toString().trim();
}

module.exports = getNpmVersion;

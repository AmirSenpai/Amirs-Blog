// get-npm-version.js (located in the root of your project)
const { execSync } = require('child_process');

function getNpmVersion() {
  return execSync('npm --version').toString().trim();
}

module.exports = getNpmVersion;

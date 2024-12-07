// docs/.vitepress/get-npm-version.js

export function getNpmVersion() {
    const { execSync } = require('child_process');
    const npmVersion = execSync('npm --version').toString().trim();
    return npmVersion;
  }
  
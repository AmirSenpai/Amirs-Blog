// docs/get-npm-version.js
import { execSync } from 'child_process';

function getNpmVersion() {
  return execSync('npm --version').toString().trim();
}

export default getNpmVersion;

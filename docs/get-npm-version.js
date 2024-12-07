// docs/get-npm-version.js
import { execSync } from 'child_process';

export function getNpmVersion() {
  return execSync('npm --version').toString().trim();
}

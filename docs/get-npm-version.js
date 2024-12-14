import { readFileSync } from 'fs';
import { join } from 'path';

export default function getNpmVersion() {
  try {
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    console.log('NPM Version Read from package.json:', packageJson.version);  // Log the version
    return packageJson.version || 'No version found';
  } catch (error) {
    console.error('Error reading package.json:', error);
    return 'No version found';
  }
}

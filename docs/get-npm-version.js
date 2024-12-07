import { readFileSync } from 'fs';
import { join } from 'path';

// Path to package.json
const packageJsonPath = join(process.cwd(), 'package.json');

// Read and parse the JSON file
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

// Export the version from package.json
const getNpmVersion = () => packageJson.version;

export default getNpmVersion;

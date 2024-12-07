import { execSync } from 'child_process';

function getNpmVersion() {
  try {
    const version = execSync('npm --version').toString().trim();
    return version;
  } catch (error) {
    return 'Version not found'; // Fallback in case of error
  }
}

export default getNpmVersion;

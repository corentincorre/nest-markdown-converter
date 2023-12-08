import { writeFile, readFile } from 'node:fs/promises';
const path = require('path');
import { generateDocumentation } from './core/index';

export async function createDocument(pathOfFileIn, pathOfFileOut) {
  const rootDir = process.cwd();
  const filePath = path.join(rootDir, pathOfFileIn);

  try {
    const file = await readFile(filePath, 'utf-8');
    const documentation = generateDocumentation(file);
    let outputPath;
    if (!pathOfFileOut) {
      pathOfFileOut = pathOfFileIn.replace(/\.mjs$/, '');
    }
    if (pathOfFileOut.endsWith('.md')) {
      outputPath = path.join(rootDir, pathOfFileOut);
    } else {
      outputPath = path.join(rootDir, pathOfFileOut + '.md');
    }
    writeFile(outputPath, documentation);
  } catch (e) {
    throw new Error(e);
  }
}

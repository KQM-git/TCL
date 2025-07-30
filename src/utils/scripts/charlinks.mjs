import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const charDir = path.resolve(__dirname, '../../../docs/characters');
const outputFile = path.resolve(__dirname, '../../data/char_links.json');

const generateCharLinks = () => {
  const charLinks = {};

  fs.readdirSync(charDir).filter(file => !file.startsWith("_")).forEach((subDir) => {
    const subDirPath = path.join(charDir, subDir);
    if (fs.statSync(subDirPath).isDirectory()) {
      fs.readdirSync(subDirPath).filter(file => !file.startsWith("_")).forEach((file) => {
        const charName = path.basename(file, path.extname(file));
        const element = path.basename(subDirPath)
        charLinks[charName] = {
          url: `/characters/${element}/${charName}`,
          elt: element
        };
      });
    }
  });

  return { charLinks, outputFile };
};

export default generateCharLinks;
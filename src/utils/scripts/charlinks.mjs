import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const charDir = path.resolve(__dirname, '../../../docs/characters');
const outputFile = path.resolve(__dirname, '../../data/char_links.json');
const elements = ["anemo", "cryo", "dendro", "electro", "geo", "hydro", "pyro"]

const generateCharLinks = () => {
  const charLinks = {};

  for (const element of elements) {
    const elementDir = path.join(charDir, element);
    if (fs.existsSync(elementDir) && fs.statSync(elementDir).isDirectory()) {
      fs.readdirSync(elementDir).filter(file => !file.startsWith("_")).forEach((file) => {
        const charName = path.basename(file, path.extname(file));
        charLinks[charName] = {
          url: `/characters/${element}/${charName}`,
          elt: element
        };
      });
    }
  }

  return { charLinks, outputFile };
};

export default generateCharLinks;
import fs from 'fs'
import path from 'path'
import generateCharLinks from './charlinks.mjs'
import updateIcons from './icons.mjs'

const links = generateCharLinks()
fs.writeFileSync(links.outputFile, JSON.stringify(links.charLinks))
updateIcons()
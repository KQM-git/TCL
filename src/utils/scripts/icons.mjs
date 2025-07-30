import fs from 'fs'
import path, { extname } from 'path'
import { fileURLToPath } from 'url';
import chars from '../../data/char_links.json' with { type: "json" }

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const charIcons = path.resolve(__dirname, "../../../static/img/characters/icon/")
const charIconsRound = path.resolve(__dirname, "../../../static/img/characters/round-icon/")
const wepIcons = path.resolve(__dirname, "../../../static/img/weapons/icon_ascended")
const charIconsOut = path.resolve(__dirname, "../../data/character_icons.json")
const charIconsRoundOut = path.resolve(__dirname, "../../data/rounded_character_icons.json")

function readBowList() {
    
}

function readArtiList() {

}

/**
 * 
 * @param {path.ParsedPath} data_path 
 */
function readCharList(data_path) {
    let icons = {}
    fs.readdirSync(data_path).filter(file => !file.startsWith("_")).forEach(file => {
        const charName = path.basename(file, path.extname(file)).match(/(.+?)(_(Skin|Alt)\d+)?$/)[1]
        const charTag = charName.toLowerCase().replace("_", "-")
        let elt = chars[charTag]?.elt
        if (elt) {
            elt = elt.charAt(0).toUpperCase() + elt.slice(1)
            if (!icons[elt]) {
                icons[elt] = [path.basename(file, path.extname(file)).replace("_", " ")]
            } else {
                icons[elt].push(path.basename(file, path.extname(file)).replace("_", " "))
            }
        }
    })
    return icons
}

function updateIcons() {
    fs.writeFileSync(charIconsOut, JSON.stringify(readCharList(charIcons), null, 2))
    fs.writeFileSync(charIconsRoundOut, JSON.stringify(readCharList(charIconsRound), null, 2))
}
export default updateIcons;
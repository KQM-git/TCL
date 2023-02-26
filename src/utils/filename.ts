export default function filename(name: string) {
    return name.replace(/ /g, "_").replace(/:|"|'/g, "")
}

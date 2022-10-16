export function findFuzzyBestCandidates(target: string[], search: string, amount: number): string[] {
    const cleaned = searchClean(search)
    const found = target.find(t => searchClean(t) == search)
    if (found)
        return [found]

    const dists = target.map(e => fuzzySearchScore(searchClean(e), cleaned) + fuzzySearchScore(caps(e), caps(search)) - e.length / 100 + 1)
    const max = Math.max(...dists)

    return target
        .map((t, i) => {
            return {
                t,
                d: dists[i]
            }
        })
        .sort((a, b) => b.d - a.d)
        .filter((e, i) => i < amount && e.d > max * 0.65)
        .map(({ t, d }) => {
            if (searchClean(t).startsWith(cleaned.substring(0, 3)) || searchClean(t).endsWith(cleaned.substring(cleaned.length - 3)))
                d += 1
            if (caps(t).includes(search[0]?.toUpperCase()))
                d += 1.5
            if (searchClean(t).startsWith(cleaned))
                d += 1
            if (caps(t) == caps(search))
                d += 0.5

            return { t, d }
        })
        .sort((a, b) => b.d - a.d)
        .map(e => e.t)
}

function searchClean(str: string): string {
    return str.toLowerCase().replace(/'/g, "")
}

function caps(str: string): string {
    return str.split("").filter(k => k != k.toLowerCase()).join("")
}

export function fuzzySearchScore(a: string, b: string): number {
    if (a.length == 0) return 0
    if (b.length == 0) return 0

    // swap to save some memory O(min(a,b)) instead of O(a)
    if (a.length > b.length) [a, b] = [b, a]

    const row = []
    // init the row
    for (let i = 0; i <= a.length; i++)
        row[i] = i


    // fill in the rest
    for (let i = 1; i <= b.length; i++) {
        let prev = i
        for (let j = 1; j <= a.length; j++) {
            const val = (b.charAt(i - 1) == a.charAt(j - 1)) ? row[j - 1] : Math.min(row[j - 1] + 1, prev + 1, row[j] + 1)
            row[j - 1] = prev
            prev = val
        }
        row[a.length] = prev
    }

    return b.length - row[a.length]
}

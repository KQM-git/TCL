const exceptions = new Map<number, number>()
exceptions.set(0, 1.0)
exceptions.set(getWeeksSinceLaunch("2021-07-21"), 2.0)
exceptions.set(getWeeksSinceLaunch("2022-05-31"), 2.7) // 2.6 was extended
exceptions.set(getWeeksSinceLaunch("2022-07-13"), 2.8) // Resync to Wednesday
exceptions.set(getWeeksSinceLaunch("2022-08-24"), 3.0)
exceptions.set(getWeeksSinceLaunch("2022-09-28"), 3.1) // 5 week schedule
exceptions.set(getWeeksSinceLaunch("2022-11-02"), 3.2) // 5 week schedule
exceptions.set(getWeeksSinceLaunch("2022-12-07"), 3.3) // 5 week schedule
exceptions.set(getWeeksSinceLaunch("2023-08-16"), 4.0)

export function getVersionNumber(weeksSinceLaunch: number): number {
  let [lowerWeek, lowerVersion] = [0, 1.0]

  for (const [weeks, version] of exceptions.entries()) {
    if (weeks > weeksSinceLaunch) {
      const interpolated = lowerVersion + (weeksSinceLaunch - lowerWeek) / 60
      // console.log(weeksSinceLaunch, interpolated, [lowerWeek, lowerVersion], [weeks, version])
      if (interpolated > version) {
        // Next version is higher than interpolated date, return last week version - 0.1
        return lowerVersion + (weeks - lowerWeek) / 60 - 0.1
      }

      return interpolated
    }

    [lowerWeek, lowerVersion] = [weeks, version]
  }

  // Extrapolated
  return lowerVersion + (weeksSinceLaunch - lowerWeek) / 60
}

export function version(date: string): string {
  const weeksSinceLaunch = getWeeksSinceLaunch(date)
  // console.log(date, weeksSinceLaunch)
  if (weeksSinceLaunch < 0) return "1.0"
  return (Math.floor(getVersionNumber(weeksSinceLaunch) * 10) / 10).toFixed(1)
}

export function getWeeksSinceLaunch(date: string): number {
  return (new Date(date).getTime() - new Date("2020-09-30").getTime()) / (24 * 7 * 3600 * 1000)
}
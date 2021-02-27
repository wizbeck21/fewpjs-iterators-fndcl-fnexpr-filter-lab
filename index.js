// Code your solution here
function findMatching(drivers, string) {
  let matchingDrivers = drivers.filter(d => {
    return d.toLowerCase() === string.toLowerCase()
  })
  return matchingDrivers
}

function fuzzyMatch(drivers, string) {
  let fuzzyMatches = drivers.filter(d => {
    return d.toLowerCase().indexOf(string.toLowerCase()) === 0
  })
  return fuzzyMatches
}

function matchName(drivers, string){
  return drivers.filter(d => d.name === string)
}
const getDiffInSeconds = (startMinute, startHour, endMinute, endHour) => {
  console.log('beg of getdiff', startMinute, startHour, endMinute, endHour)
  const start = startHour + ':' + startMinute + ':00'
  const end = endHour + ':' + endMinute + ':00'
  const startSeconds = hmsToSecondsOnly(start)
  const endSeconds = hmsToSecondsOnly(end)
  console.log(endSeconds, typeof endSeconds)
  return endSeconds - startSeconds
}

function hmsToSecondsOnly(str) {
  var a = str.split(':')
  console.log(a)
  var seconds = Number(+a[0] * 60 * 60 + +a[1] * 60 + +a[2])
  return seconds
}

export default getDiffInSeconds

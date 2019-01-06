var input = [31, 12, 60, 14, 25, 85, 84, 69, 38, 6, 40, 68, 50, 89, 59, 30, 53, 90, 54, 37]

function selSort (set) {
  var length = set.length
  for (var i = length - 1; i > 0; i--) {
    var biggest = set[0]
    for (var j = 1; j < i; j++) {
      if (set[j] > biggest) {
        biggest = set[j]
      }
    }
    var idx = set.indexOf(biggest)
    if (j !== 1) {
      set[idx] = set[i]
      set[i] = biggest
    }
  }
  return set
}

selSort(input)

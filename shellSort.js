var input = [31, 12, 60, 14, 25, 85, 84, 69, 38, 6, 40, 68, 50, 89, 59, 30, 53, 90, 54, 37]
// This builds on insertion sort.
function inSort (set) {
  let length = set.length
  let tmp,
    j
  for (let i = 1; i < length; i++) {
    // Set next element to be sorted in temporary holder
    tmp = set[i]
    // Step through the array
    for (let j = i - 1; j >= 0 && (set[j] > tmp); j--) {
      set[j + 1] = set[j]
    }
    set[j + 1] = tmp
  }
  return set
}

function findPowerOfTwo (num) {
  let i = 0
  while (i !== num - 2) {
    i += 2
  }
  return i
}

// Beginning of shell sort

function shellSort (set) {
  var length = set.length
  var powerOfTwo = findPowerOfTwo(length)
}

shellSort(input)

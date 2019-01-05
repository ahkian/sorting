var input = [31, 12, 60, 14, 25, 85, 84, 69, 38, 6, 40, 68, 50, 89, 59, 30, 53, 90, 54, 37]
// var ordered = [6, 12, 14, 25, 30, 31, 37, 38, 40, 50, 53, 54, 59, 60, 68, 69, 84, 85, 89, 90]
var persons = [{ 'name': 'john', 'age': '23' }, { 'name': 'harry', 'age': '21' }, { 'name': 'jack', 'age': '25' }]

function inSortWithKey (set) {
  var length = set.length
  for (var i = 1; i < length; i++) {
    // Set next element to be sorted in temporary holder
    let tmp = set[i]
    // Step through the array
    for (var j = i - 1; j >= 0 && (parseInt(set[j].age) > parseInt(tmp.age)); j--) {
      set[j + 1] = set[j]
    }
    set[j + 1] = tmp
  }
  return set
}

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

console.log('insert sort', inSort(input), 'insertion sort with key', inSortWithKey(persons))

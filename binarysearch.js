function binarySearch (arr, num) {
  start = 0
  stop = arr.length - 1
  middle = Math.floor((start + stop) / 2)

  while (arr[middle] !== num && start < stop) {
    if (num < arr[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    middle = Math.floor((start + stop) / 2)
  }

  return (arr[middle] !== num) ? -1 : middle
}

arr = [2, 5, 8, 9, 13, 45, 67, 99]
console.log(binarySearch(arr, 45))
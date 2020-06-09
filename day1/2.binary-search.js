/**
 * 二分查找
 */
function binarySearch(arr, target) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = Math.floor(low + (high - low) / 2)
        if (target > arr[mid]) low = mid;
        else if (target < arr[mid]) high = mid;
        else return mid
    }
}

var arr = [2, 66, 3, 2, 5, 6, 234];
var sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr)
console.log(binarySearch(sortedArr, 6))


// [
//     2,  2,   3, 5,
//     6, 66, 234
//   ]
//   4
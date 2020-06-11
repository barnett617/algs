/**
 * 倒转数组
 */
function reverse(arr) {
    // 这样的时间复杂度是O(n)，不够优化
    // for (var i = 0; i < arr.length; i++) {
    //     ans[arr.length - 1 - i] = arr[i]
    // }
    // 这样时间复杂度依然是O(n)，但只需要遍历数组的一半即可结束
    for (var i = 0, len = arr.length; i < Math.floor(len / 2); i++) {
        [arr[i], arr[len - 1 - i]] = [arr[len - 1 - i], arr[i]]
    }
    return arr
}

var arrEven = [23, 213, 32, 1, 32, 532, 2, 4, 32];
var arrOdd = [23, 213, 32, 1, 532, 2, 4, 32];
console.log(reverse(arrEven))
console.log(reverse(arrOdd))

// [
//     32,  4,   2, 532, 32,
//      1, 32, 213,  23
//   ]
//   [
//     32,  4,   2, 532,
//      1, 32, 213,  23
//   ]
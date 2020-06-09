/**
 * 倒转数组
 */
function reverse(arr) {
    var ans = [];
    for (var i = 0; i < arr.length; i++) {
        ans[arr.length - 1 - i] = arr[i]
    }
    return ans
}

var arr = [23, 213, 32, 1, 32, 532, 2, 4, 32];
console.log(reverse(arr))

// [
//     32,  4,   2, 532, 32,
//      1, 32, 213,  23
//   ]
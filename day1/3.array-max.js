/**
 * 数组最大元素
 */
function max(arr) {
    var max = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    }
    return max
}
var arr = [23, 213, 32, 1, 32, 532, 2, 4, 32];
console.log(Math.max(...arr))
console.log(max(arr))

// 532
// 532
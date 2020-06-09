/**
 * 数组拷贝
 */
function copy(arr) {
    var arrCopy = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        arrCopy[i] = arr[i]
    }
    return arrCopy
}

var arr = [23, 213, 32, 1, 32, 532, 2, 4, 32];
console.log(copy(arr))

// [
//     23, 213, 32,  1, 32,
//    532,   2,  4, 32
//  ]
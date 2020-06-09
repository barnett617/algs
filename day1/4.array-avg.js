/**
 * 数组平均值
 */
function avg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

var arr = [23, 213, 32, 1, 32, 532, 2, 4, 32];
console.log(avg(arr))

// 96.77777777777777
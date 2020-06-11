/**
 * 绝对值
 */
function abs(value) {
    // return value >= 0 ? value : -value
    return value < 0 ? -value : value
}
console.log(abs(12))
console.log(abs(0))
console.log(abs(-13))

// 12
// 0
// 13
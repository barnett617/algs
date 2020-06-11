/**
 * 矩阵相乘
 */
function matrixMutify(matrixA, matrixB) {
    var len = matrixA.length

    // 初始化二维数组
    var ans = new Array(len)
    for (let i = 0; i < ans.length; i++) {
        ans[i] = new Array(len);
    }
    for (let i = 0; i < ans.length; i++) {
        for (let j = 0; j < ans.length; j++) {
            ans[i][j] = 0
        }
    }

    // 左矩阵行乘每一个右矩阵列的加和是结果矩阵的一个值
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            for (var k = 0; k < len; k++) {
                const a = matrixA[i][k]
                const b = matrixB[k][j]
                ans[i][j] += a * b
            }
        }
    }
    return ans
}
var matrixA = [
    [2, 3, 7],
    [5, 4, 6],
    [1, 9, 8]
]
var matrixB = [
    [3, 4, 7],
    [8, 5, 2],
    [1, 6, 9]
]
console.log(matrixMutify(matrixA, matrixB))
// [ [ 37, 65, 83 ], [ 53, 76, 97 ], [ 83, 97, 97 ] ]
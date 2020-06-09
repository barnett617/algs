/**
 * 最大公约数
 * 欧几里得算法（辗转相除法）
 */
function gcd(p, q) {
    if (q === 0) return p;
    var r = p % q;
    return gcd(q, r);
}
console.log(gcd(108, 96))
console.log(gcd(12468, 5862))

// 12
// 6
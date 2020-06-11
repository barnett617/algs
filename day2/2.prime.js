/**
 * 判断质数（素数）
 * 只能被1和自身整除的自然数
 * 0和1不是质数
 */
function isPrime(num) {
    if (num < 2) return false

    // var arr = []
    // for (var i = 2; i < num; i++) {
    //     arr.push(i)
    // }
    // // 只要在1和自身以外有数能整除目标数，则该数不是素数
    // return !arr.some(item => {
    //     return num % item === 0
    // })
    // // 但该解法的问题在于可能超出js计算范围
    
    // 把不符合质数的都拦截掉，否则就一定是质数
    // 符合大于 从2开始，每次递增1的整数 的乘方才进入比较
    // 第一轮：2——小于2的平方，循环结束，是素数
    // 第二轮：3——小于2的平方，循环结束，是素数
    // 第三轮：4——等于2的平方，但能被2整除，不是素数
    // 第四轮：5——大于2的平方，进入循环，不能被2整除，
    //                      进入下一次循环，小于3的2平方，循环结束，是素数
    // 第五轮：6——大于2的平方，但能被2整除，不是素数
    // 第六轮：7——大于2的平方，进入循环，不能被2整除，
    //                      进入下一次循环，小于3的2平方，循环结束，是素数
    // 第七轮：8——大于2的平方，但能被2整除，不是素数
    // 第八轮：9——大于2的平方，进入循环，不能被2整除
    //                      进入下一次循环，大于等于3的平方
    //                      进入下一次循环，但能被3整除，不是素数
    // 第九轮：10——大于2的平方，但能被2整除，不是素数
    // 第十轮：11——大于2的平方，进入循环，不能被2整除，
    //                      进入下一次循环，大于等于3的平方
    //                      进入下一次循环，不能被3整除
    //                      进入下一次循环，小于4的平方，循环结束，是素数
    // 第十一轮：12——大于2的平方，但能被2整除，不是素数
    // 第十二轮：13——大于2的平方，进入循环，不能被2整除，
    //                      进入下一次循环，大于等于3的平方
    //                      进入下一次循环，不能被3整除
    //                      进入下一次循环，小于4的平方，循环结束，是素数
    // 第十三轮：14——大于2的平方，但能被2整除，不是素数
    // 第十四轮：15——大于2的平方，进入循环，不能被2整除
    //                      进入下一次循环，大于等于3的平方
    //                      进入下一次循环，但能被3整除，不是素数
    // 第十五轮：16——大于2的平方，但能被2整除，不是素数

    // 所有的偶数都不是素数
    // 所有能被3整除的也不是素数
    // 能被4整除的都是偶数,同样也不是素数
    // 能被5整除的也不是素数
    // 能被6整除的都是偶数,同样也不是素数
    // 能被7整除的也不是偶数

    // 之所以要判断 i * i <= num 是因为要看除自身外是否存在能整除目标数的自然数
    for (var i = 2; i * i <= num; i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(7))
console.log(isPrime(8))
console.log(isPrime(9))
console.log(isPrime(10))
console.log(isPrime(11))
console.log('================', isPrime(12353))
console.log(isPrime(12353123531235312353))

// true
// false
// true
// false
// true
// false
// false
// false
// true
// ================ false

// <--- Last few GCs --->

// [8948:0000013B5113B710]      749 ms: Scavenge 1148.6 (1182.0) -> 1148.6 (1182.0) MB, 32.8 / 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure
// [8948:0000013B5113B710]     1344 ms: Mark-sweep 1722.4 (1755.8) -> 1709.9 (1743.9) MB, 295.5 / 0.0 ms  (+ 35.2 ms in 11 steps since start of marking, biggest step 4.9 ms, walltime since start of 
// marking 1278 ms) (average mu = 1.000, current mu = 1.000) al

// <--- JS stacktrace --->

// ==== JS stack trace =========================================

//     0: ExitFrame [pc: 00007FF753EC4FAD]
// Security context: 0x03b132b808d1 <JSObject>
//     1: isPrime [000000D8D55B0A81] [D:\1work\algs\day2\2.prime.js:~6] [pc=000001DA5D5C4CAC](this=0x0019547c2301 <JSGlobal Object>,0x0018243d6051 <HeapNumber 1.23531e+19>)
//     2: /* anonymous */ [000000D8D55B0AC1] [D:\1work\algs\day2\2.prime.js:30] [bytecode=00000018243D6061 offset=289](this=0x00d8d55b0bf1 <Object map = 00000372510C0439>,0x00d8d55b0bf1 <Obje...    

// FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory

// Writing Node.js report to file: report.20200611.233243.8948.0.001.json
// Node.js report completed
//  1: 00007FF7532C380F napi_wrap+128063
//  2: 00007FF7532629B6 public: bool __cdecl v8::base::CPU::has_sse(void)const __ptr64+35142
//  3: 00007FF753263676 public: bool __cdecl v8::base::CPU::has_sse(void)const __ptr64+38406
//  4: 00007FF753A7A11E private: void __cdecl v8::Isolate::ReportExternalAllocationLimitReached(void) __ptr64+94
//  5: 00007FF753A621F1 public: class v8::SharedArrayBuffer::Contents __cdecl v8::SharedArrayBuffer::Externalize(void) __ptr64+833
//  6: 00007FF75392E74C public: static void __cdecl v8::internal::Heap::EphemeronKeyWriteBarrierFromCode(unsigned __int64,unsigned __int64,class v8::internal::Isolate * __ptr64)+1436
//  7: 00007FF75394B64B private: class v8::internal::Handle<class v8::internal::FixedArray> __cdecl v8::internal::Factory::NewFixedArrayWithFiller(enum v8::internal::RootIndex,int,class v8::internal::Object,enum v8::internal::AllocationType) __ptr64+59
//  8: 00007FF75394B601 public: class v8::internal::Handle<class v8::internal::FixedArray> __cdecl v8::internal::Factory::NewFixedArray(int,enum v8::internal::AllocationType) __ptr64+65
//  9: 00007FF75382874F public: class v8::Isolate * __ptr64 __cdecl v8::Message::GetIsolate(void)const __ptr64+8527
// 10: 00007FF7536D841A public: class v8::internal::interpreter::JumpTableTargetOffsets::iterator & __ptr64 __cdecl v8::internal::interpreter::JumpTableTargetOffsets::iterator::operator=(class v8::internal::interpreter::JumpTableTargetOffsets::iterator && __ptr64) __ptr64+162938
// 11: 00007FF753EC4FAD public: virtual bool __cdecl v8::internal::SetupIsolateDelegate::SetupHeap(class v8::internal::Heap * __ptr64) __ptr64+546637
// 12: 000001DA5D5C4CAC
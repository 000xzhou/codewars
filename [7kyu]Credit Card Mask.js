/**
 *Your task is to write a function maskify, which changes all but the last four characters into '#'.
 "4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""
*/


// return masked string
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}
function maskify2(cc) {
    return cc.replace(/.(?=.{4,}$)/g, '#')
}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify('11111'))

console.log(maskify2('4556364607935616'))
console.log(maskify2('1'))
console.log(maskify2('11111'))
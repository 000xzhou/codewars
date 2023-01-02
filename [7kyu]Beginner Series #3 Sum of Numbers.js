function getSum(a, b) {
    //Good luck!
    var list = [];
    if (a > b) {
        [a, b] = [b, a]
    }
    for (var i = a; i <= b; i++) {
        list.push(i);
    }
    return list.reduce((a, b) => a + b, 0)
}

console.log(getSum(1, 0))
console.log(getSum(1, 2))
console.log(getSum(0, 1))
console.log(getSum(1, 1))
console.log(getSum(-1, 0))
console.log(getSum(-1, 2))

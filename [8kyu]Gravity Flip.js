

const flip = (d, a) => {
    //TODO
    if (d === 'R') {
        return a.sort((a, b) => a - b)
    }
    return a.sort((a, b) => a - b).reverse()
}


console.log(flip('R', [3, 2, 1, 2]))
//[1, 2, 2, 3]
console.log(flip('L', [1, 4, 5, 3, 5]))
//[5, 5, 4, 3, 1]

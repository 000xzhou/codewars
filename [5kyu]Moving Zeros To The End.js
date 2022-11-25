// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    // here I filter out into 2 groups. one with zeros and one without
    const allZero = arr.filter((zeros, index) => arr[index] === 0)
    const noZero = arr.filter((zeros, index) => arr[index] !== 0)
    // here I join the 2 arrays together
    const joinTogether = noZero.concat(allZero)
    return joinTogether
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))
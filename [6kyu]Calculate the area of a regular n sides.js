function areaOfPolygonInsideCircle(numberOfSides, circleRadius) {
    // Your code here
    let r = circleRadius
    let n = numberOfSides
    let twoPi = (2 * Math.PI) / n
    let x = Math.sin(twoPi)
    let y = n * Math.pow(r, 2) / 2
    return Math.round(y * x * 1000) / 1000
}
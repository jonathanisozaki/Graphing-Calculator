// This is the class that forms the Point objects on the graph.
export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


// This is the code to plot a graph.
export function plotGraph(canvasContext, graphArray, gridWidth, gridHeight, color) {

    for (let k = 0; k < graphArray.length; k++) {
        let xValue = gridWidth * graphArray[k].x;
        let yValue = -1 * gridHeight * graphArray[k].y;
        canvasContext.lineWidth = 2;
        canvasContext.beginPath();
        canvasContext.moveTo(xValue, yValue);
        canvasContext.arc(xValue, yValue, 1, 0, 2 * Math.PI);
        canvasContext.stroke();
        canvasContext.strokeStyle = color;
        canvasContext.arcWidth = 1.5;
    }
}

// This function returns an array for points of a transformed polynomial 
export function parentPolynomial(startValue, endValue, a, h, k, power, stepSize) {
    let graphArray = [];
    let j = 0;
    let xValue = startValue;

    while (xValue <= endValue) {
        let factor = xValue - h;
        let newY = a * Math.pow(factor, power) + k;
        let newPoint = new Point(xValue, newY);
        graphArray.push(newPoint);
        xValue = xValue + stepSize;
        j++;
    }

    return graphArray;
}
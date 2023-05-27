// These function draw the coordinate plane
export function drawXAxis(canvasContext, width, height, gridWidth) {
    // The x-axis
    let xValues = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    canvasContext.strokeStyle = "black";
    canvasContext.lineWidth = 3;
    canvasContext.beginPath();
    canvasContext.moveTo(-1 * width / 2, 0);
    canvasContext.lineTo(width / 2, 0);
    canvasContext.stroke();

    //x-axis markings
    for (let k = 0; k < xValues.length; k++) {
        let xCoord = -1 * width / 2 + (width - k * gridWidth);
        canvasContext.beginPath();
        canvasContext.moveTo(xCoord, -5);
        canvasContext.lineTo(xCoord, 5);
        canvasContext.stroke();
        canvasContext.lineWidth = 3;
    }
    //Saving the drawing on the canvas
    canvasContext.save();

}

export function drawYAxis(canvasContext, width, height, gridWidth) {
    // The y-axis
    let yValues = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    canvasContext.strokeStyle = "black";
    canvasContext.lineWidth = 3;
    canvasContext.beginPath();
    canvasContext.moveTo(0, -height / 2);
    canvasContext.lineTo(0, height / 2);
    canvasContext.stroke();

    //y-axis markings
    for (let k = 0; k < yValues.length; k++) {
        let yCoord = -1 * width / 2 + (width - k * gridWidth);
        canvasContext.beginPath();
        canvasContext.moveTo(-5, yCoord);
        canvasContext.lineTo(5, yCoord);
        canvasContext.stroke();
        canvasContext.lineWidth = 3;

    }

    // Saving the drawing on the canvas
    canvasContext.save()
}

export function drawGridMarkings(canvasContext, width, height, gridWidth) {
    // x-values and y-values array
    let xValues = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let yValues = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //Horizontal Grid Markings
    for (let k = 0; k < yValues.length; k++) {
        let yCoord = -1 * width / 2 + (width - k * gridWidth);
        canvasContext.beginPath();
        canvasContext.moveTo(height / 2, yCoord);
        canvasContext.lineTo((-1) * height / 2, yCoord);
        canvasContext.stroke();
        canvasContext.lineWidth = 1;

    }
    //Vertical Grid Markings
    for (let k = 0; k < xValues.length; k++) {
        let xCoord = -1 * width / 2 + (width - k * gridWidth);
        canvasContext.beginPath();
        canvasContext.moveTo(xCoord, -1 * height / 2);
        canvasContext.lineTo(xCoord, height / 2);
        canvasContext.stroke();
        canvasContext.lineWidth = 1;
    }

    // Saving the drawing on the canvas
    canvasContext.save()
}
// Imports and Required Packages
import {Point, plotGraph, parentPolynomial} from './graphGridPoints.js';
import {drawXAxis, drawYAxis, drawGridMarkings} from './graphAxes.js';
import {roundNearestTenth} from './roundNumbers.js';

// This line of code grabs the coordinate plane.
const coordinatePlane = document.getElementById("coordinate-plane");
const coordinatePlaneContext = coordinatePlane.getContext("2d");

// The width and height of canvas tag
let width = 300;
let height = 300;
coordinatePlaneContext.width = width+5;
coordinatePlaneContext.height = height+5;
let gridWidth = width / 20;
let gridHeight = height / 20;

//Origin Translation
let originX = width / 2;
let originY = height / 2;
coordinatePlaneContext.translate(originX, originY);
coordinatePlaneContext.strokeStyle = "black";

coordinatePlaneContext.font = "14px Arial";
let counter = 1;

// This code displays the grids
drawXAxis(coordinatePlaneContext, width, height, gridWidth);
drawYAxis(coordinatePlaneContext, width, height, gridWidth);
drawGridMarkings(coordinatePlaneContext, width, height, gridWidth);


/* Graph of f(x)=x^2 */
// 'a' Value
let aQuad = document.getElementById("a-value-quadratic");
let aQuadLabel = document.getElementById("a-value-quadratic-label");
aQuadLabel.innerHTML = `a = ${0.1*roundNearestTenth(aQuad.value)}`;

// 'h' Value
let hQuad = document.getElementById("h-value-quadratic");
let hQuadLabel = document.getElementById("h-value-quadratic-label");
aQuadLabel.innerHTML = `h = ${0.1*roundNearestTenth(hQuad.value)}`;

// 'k' Value
let kQuad = document.getElementById("k-value-quadratic");
let kQuadLabel = document.getElementById("k-value-quadratic-label");
kQuadLabel.innerHTML = `k = ${0.1*roundNearestTenth(kQuad.value)}`;

// Functions to control the Quadratic Graph
aQuad.oninput = function() {
    aQuadLabel.innerHTML = `a = ${roundNearestTenth(0.1*aQuad.value)}`;
    coordinatePlaneContext.clearRect((-1) * width / 2, (-1) * height / 2, width, height);
    drawXAxis(coordinatePlaneContext, width, height, gridWidth);
    drawYAxis(coordinatePlaneContext, width, height, gridWidth);
    drawGridMarkings(coordinatePlaneContext, width, height, gridWidth);
    const newQuadGraphArray = parentPolynomial(-10, 10, 0.1 * roundNearestTenth(aQuad.value), 0.1 * roundNearestTenth(hQuad.value), 0.1 * roundNearestTenth(kQuad.value), 2, 0.001);
    plotGraph(coordinatePlaneContext, newQuadGraphArray, gridWidth, gridHeight, "rgb(255, 66, 66)");
};


hQuad.oninput = function() {
    hQuadLabel.innerHTML = `h = ${roundNearestTenth(0.1*hQuad.value)}`;
    coordinatePlaneContext.clearRect((-1) * width / 2, (-1) * height / 2, width, height);
    drawXAxis(coordinatePlaneContext, width, height, gridWidth);
    drawYAxis(coordinatePlaneContext, width, height, gridWidth);
    drawGridMarkings(coordinatePlaneContext, width, height, gridWidth);
    const newQuadGraphArray = parentPolynomial(-10, 10, 0.1 * roundNearestTenth(aQuad.value), 0.1 * roundNearestTenth(hQuad.value), 0.1 * roundNearestTenth(kQuad.value), 2, 0.001);
    plotGraph(coordinatePlaneContext, newQuadGraphArray, gridWidth, gridHeight, "rgb(255, 66, 66)");
};

kQuad.oninput = function() {
    kQuadLabel.innerHTML = `k = ${roundNearestTenth(0.1*kQuad.value)}`;
    coordinatePlaneContext.clearRect((-1) * width / 2, (-1) * height / 2, width, height);
    drawXAxis(coordinatePlaneContext, width, height, gridWidth);
    drawYAxis(coordinatePlaneContext, width, height, gridWidth);
    drawGridMarkings(coordinatePlaneContext, width, height, gridWidth);
    const newQuadGraphArray = parentPolynomial(-10, 10, 0.1 * Math.round(aQuad.value), 0.1 * Math.round(hQuad.value), 0.1 * Math.round(kQuad.value), 2, 0.001);
    plotGraph(coordinatePlaneContext, newQuadGraphArray, gridWidth, gridHeight, "rgb(255, 66, 66)");
};

// Function to animate all of the changes
function quadTransform() {
    aQuad.oninput();
    hQuad.oninput();
    kQuad.oninput();
    coordinatePlaneContext.save();
}

// This line of code animates the quadratic graph.
window.requestAnimationFrame(quadTransform);

/* Graph of f(x)=x^3 */
//'a' Value
let aCubic = document.getElementById("a-value-cubic");
let aCubicLabel = document.getElementById("a-value-cubic-label");
aCubicLabel.innerHTML = `a = ${roundNearestTenth(aCubic.value)}`;

//'h' Value
let hCubic = document.getElementById("h-value-cubic");
let hCubicLabel = document.getElementById("h-value-cubic-label");
hCubicLabel.innerHTML = `h = ${roundNearestTenth(hCubic.value)}`;

//'k' Value
let kCubic = document.getElementById("k-value-cubic");
let kCubicLabel = document.getElementById("k-value-cubic-label");
kCubicLabel.innerHTML = `k = ${roundNearestTenth(kCubic.value)}`;

// Functions to control the cubic graphs
aCubic.oninput = function() {
    aCubicLabel.innerHTML = `a = ${roundNearestTenth(0.1*aCubic.value)}`;
    coordinatePlaneContext.clearRect((-1) * width / 2, (-1) * height / 2, width, height);
    drawXAxis(coordinatePlaneContext, width, height, gridWidth);
    drawYAxis(coordinatePlaneContext, width, height, gridWidth);
    drawGridMarkings(coordinatePlaneContext, width, height, gridWidth);
    const newCubicGraphArray = parentPolynomial(-10, 10, 0.1 * roundNearestTenth(aCubic.value), 0.1 * roundNearestTenth(hCubic.value), 0.1 * roundNearestTenth(kCubic.value), 3, 0.001);
    plotGraph(coordinatePlaneContext, newCubicGraphArray, gridWidth, gridHeight, "rgb(51, 51, 255)");
};


hCubic.oninput = function() {
    hCubicLabel.innerHTML = `h = ${roundNearestTenth(0.1*hCubic.value)}`;
    coordinatePlaneContext.clearRect((-1) * width / 2, (-1) * height / 2, width, height);
    drawXAxis(coordinatePlaneContext, width, height, gridWidth);
    drawYAxis(coordinatePlaneContext, width, height, gridWidth);
    drawGridMarkings(coordinatePlaneContext, width, height, gridWidth);
    const newCubicGraphArray = parentPolynomial(-10, 10, 0.1 * roundNearestTenth(aCubic.value), 0.1 * roundNearestTenth(hCubic.value), 0.1 * roundNearestTenth(kCubic.value), 3, 0.001);
    plotGraph(coordinatePlaneContext, newCubicGraphArray, gridWidth, gridHeight, "rgb(51, 51, 255)");
};

kCubic.oninput = function() {
    kCubicLabel.innerHTML = `k = ${roundNearestTenth(0.1*kCubic.value)}`;
    coordinatePlaneContext.clearRect((-1) * width / 2, (-1) * height / 2, width, height);
    drawXAxis(coordinatePlaneContext, width, height, gridWidth);
    drawYAxis(coordinatePlaneContext, width, height, gridWidth);
    drawGridMarkings(coordinatePlaneContext, width, height, gridWidth);
    const newCubicGraphArray = parentPolynomial(-10, 10, 0.1 * roundNearestTenth(aCubic.value), 0.1 * roundNearestTenth(hCubic.value), 0.1 * roundNearestTenth(kCubic.value), 3, 0.001);
    plotGraph(coordinatePlaneContext, newCubicGraphArray, gridWidth, gridHeight, "rgb(51, 51, 255)");
};


// Function to animate all of the changes
function cubicTransform() {
    aCubic.oninput();
    hCubic.oninput();
    kCubic.oninput();
    coordinatePlaneContext.save();
}

// This line of code animates the cubic graph
window.requestAnimationFrame(cubicTransform);

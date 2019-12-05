//variables for drawing canvas
var canvas,
    context,
    dragging = false,
    dragStartLocation,
    snapshot;
//this function calculates the coordinates of the corners on the canvas
function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left,
        y = event.clientY - canvas.getBoundingClientRect().top;

    return { x: x, y: y };
}
//function that takes snapshot of line once the click is let go
function takeSnapshot() {
    snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
}
//function that restores it back on to the canvcas
function restoreSnapshot() {
    context.putImageData(snapshot, 0, 0);
}

//function that creates the line to be drawn
function drawLine(position) {
    context.beginPath();
    context.moveTo(dragStartLocation.x, dragStartLocation.y);
    context.lineTo(position.x, position.y);
    context.stroke();
}
//this function captures x and y coordinates when you drag the mouse
function dragStart(event) {
    dragging = true;
    dragStartLocation = getCanvasCoordinates(event);
    takeSnapshot();
}
//function used to clear visible portion of the canvas by clicking on clearcanvas button
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
//function that gives you the ability to drag a line
function drag(event) {
    var position;
    if (dragging === true) {
        restoreSnapshot();
        position = getCanvasCoordinates(event);
        drawLine(position);
    }
}
//function that ends the line you are dragging
function dragStop(event) {
    dragging = false;
    restoreSnapshot();
    var position = getCanvasCoordinates(event);
    drawLine(position);
}
//function that sets up the entire document once it gets loaded
function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');
    context.strokeStyle = 'black';
    context.lineWidth = 6;
    context.lineCap = 'round';

    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
}
//function to take in the events and objects
window.addEventListener('load', init, false);


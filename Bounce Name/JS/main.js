function drawBubbles(myName,shape)
{



var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

letterColors = [red, orange, green, purple, blue]

bubbleShape = shape;

drawName(myName, letterColors);

bounceBubbles()

}

drawBubbles("Matt", "circle");
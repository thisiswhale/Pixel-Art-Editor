let GRID = [600, 200]
let [WIDTH , HEIGHT] = GRID;
let kBoardWidth = 9;
let kBoardHeight= 9;
let kPieceWidth = 25;
let kPieceHeight= 25;

let kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
let kPixelHeight= 1 + (kBoardHeight * kPieceHeight);

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

/* SET CANVAS SIZE */
canvas.width = kPixelWidth;
canvas.height = kPixelHeight;

/* VERTICAL LINES */
for (var x = 0; x <= kPixelWidth; x += kPieceWidth) {
    ctx.moveTo(0.5 + x, 0);
    ctx.lineTo(0.5 + x, kPixelHeight);
}

/* HORIZONTAL LINES */
for (var y = 0; y <= kPixelHeight; y += kPieceHeight) {
    ctx.moveTo(0, 0.5 + y);
    ctx.lineTo(kPixelWidth, 0.5 +  y);
}

ctx.strokeStyle = 'grey';//"#eee";
ctx.lineWidth = 2;
ctx.stroke();

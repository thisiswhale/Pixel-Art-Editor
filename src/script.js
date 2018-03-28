let GRID = [600, 200]
let [WIDTH, HEIGHT] = GRID;
let kBoardWidth = 9;
let kBoardHeight = 9;
let kPieceWidth = 25;
let kPieceHeight = 25;

let kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
let kPixelHeight = 1 + (kBoardHeight * kPieceHeight);

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let isEraser = false;
let isPencil = false;
let selected =
/* SET CANVAS SIZE */
canvas.width = kPixelWidth;
canvas.height = kPixelHeight;

canvas.addEventListener('click', fillCell ,false);
let selectedColor ="#000";
drawGrid();

//2D ARRAY
let dataGrid = new Array(kBoardWidth).fill(Array(kBoardHeight).fill(false))

function Cell(row, column) {
    this.row = row;
    this.column = column;
}

function drawGrid() {
  ctx.beginPath();

	/* VERTICAL LINES */
	for (let x = 0; x <= kPixelWidth; x += kPieceWidth) {
		ctx.moveTo(0.5 + x, 0);
		ctx.lineTo(0.5 + x, kPixelHeight);
	}

	/* HORIZONTAL LINES */
	for (let y = 0; y <= kPixelHeight; y += kPieceHeight) {
		ctx.moveTo(0, 0.5 + y);
		ctx.lineTo(kPixelWidth, 0.5 + y);
	}

	ctx.strokeStyle = 'grey'; //"#eee";
	ctx.lineWidth = 2;
	ctx.stroke();
}

function getCursorPosition(e) {
	/* returns Cell with .row and .column properties */
	let x;
	let y;
	if (e.pageX != undefined && e.pageY != undefined) {
		x = e.pageX;
		y = e.pageY;
	} else {
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	x = Math.min(x, kBoardWidth * kPieceWidth);
	y = Math.min(y, kBoardHeight * kPieceHeight);
	let cell = new Cell(Math.floor(y / kPieceHeight), Math.floor(x / kPieceWidth));
	return cell;
}

function fillCell(e) {
	//if(!isDrawing) return;

	let cell = getCursorPosition(e);
	let column = cell.column;
	let row = cell.row;

  //SAVES COLOR TO ARRAY at (row,column)
  dataGrid[row][column] = selectedColor;

	let x = (column * kPieceWidth);
	let y = (row * kPieceHeight);
	ctx.beginPath();
	ctx.fillRect(x, y, kPieceWidth, kPieceHeight);
	ctx.closePath();
	ctx.strokeStyle = selectedColor;
	ctx.stroke();

	drawGrid();
}

let gridSize = 16;

// Make a grid
function makeGrid() {
    let width = 600;
    let height = 600;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let makeDiv = document.createElement('div');
        makeDiv.className = 'grid-item';

        document.getElementById('grid-container').style.gridTemplateColumns = "repeat(" + gridSize + ", " + width / gridSize + "px)";
        document.getElementById('grid-container').style.gridTemplateRows = "repeat(" + gridSize + ", " + height / gridSize + "px)";
        document.getElementById('grid-container').appendChild(makeDiv);
    }
}


// Make a custom grid
const customGridButton = document.querySelector('#customGridButton');
customGridButton.addEventListener('click', makeCustomGrid);

function makeCustomGrid() {
    gridItem = document.querySelectorAll('.grid-item');
    while (gridSize !== null || gridSize !== false) {
        gridSize = prompt('Enter a Custom Grid (1-100)');
        if (gridSize !== null && gridSize !== "" && Number(gridSize) !== 0) {
            break;
        } else {
            alert('ONLY 1-100 ALLOWED!!!');
        }
    }
    removeGrid();
    makeGrid();
    checkLastButtonClicked();
}


// Remove the old grid to make a new one
function removeGrid() {
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(function (e) {
        e.remove();
    })
}


// Remember the last preferences the user picked
let lastButton;
function checkLastButtonClicked() {
    if (lastButton == 'black') {
        makeBlackGridColor();
    } else if (lastButton == 'random') {
        makeRandomGridColor();
    } else if (lastButton == 'custom') {
        makeCustomGridColor();
    }
}

// Pick color from the color input and use it to etch
const colorPickerButton = document.querySelector('#colorPickerButton');
let customColor = colorPickerButton.value;
colorPickerButton.addEventListener('change', makeCustomGridColor);

function makeCustomGridColor() {
    let customColor = colorPickerButton.value;
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(function (e) {
        e.addEventListener('mouseenter',function(){
            e.style.backgroundColor = `${customColor}`;
        })
    })
    lastButton = 'custom';
    return lastButton;
}


// Makes the grid color black when hovered
const blackAndWhiteButton = document.querySelector('#blackAndWhiteButton');
blackAndWhiteButton.addEventListener('click', makeBlackGridColor);

function makeBlackGridColor() {
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(function (e) {
        let gridColor = 255;
        e.addEventListener('mouseenter', function () {
            gridColor -= 25.5;
            e.style.backgroundColor = `rgb(${gridColor}, ${gridColor}, ${gridColor})`;
        })
    })
    lastButton = 'black'
    return lastButton;
}


// Create a random color for each grid when hovered
const randomColorButton = document.querySelector('#randomColorButton');
randomColorButton.addEventListener('click', makeRandomGridColor);

function makeRandomGridColor() {
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(function (e) {
        e.addEventListener('mouseenter', function () {
            function randomColor() {
                let random = Math.floor(Math.random() * 255);
                return random;
            }
            e.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        })
    })
    lastButton = 'random';
    return lastButton;
}


// Clear the current grid
const clearGridButton = document.querySelector('#clearGridButton');
clearGridButton.addEventListener('click', clearGrid);

function clearGrid() {
    gridItem.forEach(function (e) {
        e.style.backgroundColor = 'rgb(255,255,255)';
    })
    checkLastButtonClicked();
}


// Erase the etch
const eraseGridButton = document.querySelector('#eraseGridButton');
eraseGridButton.addEventListener('click', eraseGrid);

function eraseGrid() {
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(function (e) {
        e.addEventListener('mouseenter', function () {
            e.style.backgroundColor = 'rgb(255,255,255)';
        })
    })
}


// Disable or enable the grid
const gridOnOffbutton = document.querySelector('#gridOnOffButton')
gridOnOffbutton.addEventListener('click', gridOnOrOff);

let grid = true;
function gridOnOrOff() {
    if (grid === true) {
        grid = false;
        gridItem = document.querySelectorAll('.grid-item');
        gridItem.forEach(function (e) {
            e.style.border = 'none';
        })
        gridOnOffbutton.style.backgroundColor = 'red';
    } else {
        grid = true;
        gridItem = document.querySelectorAll('.grid-item');
        gridItem.forEach(function (e) {
            e.style.border = '1px solid';
        })
        gridOnOffbutton.style.backgroundColor = 'green';
    }
}

makeGrid();
makeBlackGridColor();

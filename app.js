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
    gridSize = prompt('Enter a Custom Grid');
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



// Remember last button the user clicked
let lastButton;
function checkLastButtonClicked() {
    if (lastButton == 'black') {
        makeGridColorBlack();
    } else if (lastButton == 'random') {
        makeGridColorRandom();
    }
}



// Darken the color of each grid when hovered until it becomes pure black
const blackAndWhiteButton = document.querySelector('#blackAndWhiteButton');
blackAndWhiteButton.addEventListener('click', makeGridColorBlack);

function makeGridColorBlack() {
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



// Clear the current grid
const clearGridButton = document.querySelector('#clearGridButton');
clearGridButton.addEventListener('click', clearGrid);

function clearGrid() {
    gridItem.forEach(function (e) {
        e.style.backgroundColor = 'rgb(255,255,255)';
    })
    checkLastButtonClicked(); 
}



// Create a random color for each grid when hovered
const randomColorButton = document.querySelector('#randomColorButton');
randomColorButton.addEventListener('click', makeGridColorRandom);

function makeGridColorRandom() {
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


makeGrid();
makeGridColorBlack();

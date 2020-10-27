let gridSize = 16;
function makeGrid() {
    let width = 600;
    let height = 600;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let makeDiv = document.createElement('div');
        makeDiv.className = 'grid-item';

        document.getElementById('grid-container').appendChild(makeDiv);
        document.getElementById('grid-container').style.gridTemplateColumns = "repeat(" + gridSize + ", " + width / gridSize + "px)";
        document.getElementById('grid-container').style.gridTemplateRows = "repeat(" + gridSize + ", " + height / gridSize + "px)";

    }
}


function removeGrid() {
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(function (e) {
        e.remove();
    })
}
makeGrid();

let total = 0;
let gridItem;
function hover() {
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(function (e) {
        let gridColor = 255;
        e.addEventListener('mouseenter', function () {
            gridColor -= 25.5;
            e.style.backgroundColor = `rgb(${gridColor}, ${gridColor}, ${gridColor})`;
        })
    })
}

hover();

const customGridButton = document.querySelector('#customGridButton');

customGridButton.addEventListener('click', function () {
    gridSize = prompt('Enter a Custom Grid');
    removeGrid();
    makeGrid();
    hover();
})

function clearGrid () {
    gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(function (e) {
        e.style.backgroundColor = 'rgb(255,255,255)';
        gridColor = 255;
    })
}

const clearGridButton = document.querySelector('#clearGridButton');

clearGridButton.addEventListener('click', clearGrid);

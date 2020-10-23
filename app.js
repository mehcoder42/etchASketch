let gridSize = 16;
function makeGrid() {

    for (let i = 0; i < gridSize * gridSize; i++) {
        let makeDiv = document.createElement('div');
        makeDiv.className = 'grid-item';

        document.getElementById('grid-container').appendChild(makeDiv);
        document.getElementById('grid-container').style.gridTemplateColumns = "repeat(" + gridSize + ", 30px";
        document.getElementById('grid-container').style.gridTemplateRows = "repeat(" + gridSize + ", 30px";
    }
}


function removeGrid() {
    gridItem.forEach(function (e) {
        e.remove();
    })
}
makeGrid();


const gridItem = document.querySelectorAll('.grid-item');
function hover() {
    gridItem.forEach(function (e) {
        e.addEventListener('mouseenter', function () {
            e.classList.toggle('black');
        })
    })
}

hover();

const customGridButton = document.querySelector('#customGridButton')

customGridButton.addEventListener('click', function () {
    gridSize = prompt('Enter a Custom Grid');
    removeGrid();
    makeGrid();
    hover();
})


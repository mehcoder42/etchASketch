let makeGrid = document.createElement('div');

for (let i = 0; i < 256; i++) {
    makeGrid = document.createElement('div');
    makeGrid.className = 'grid';

    document.getElementById('grid-container').appendChild(makeGrid);
}

const grid = document.querySelectorAll('.grid');
for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseenter', function () {
        grid[i].classList.toggle('black');
    })
}

const customGridButton = document.querySelector('#customGridButton')
customGridButton.addEventListener('click', function () {
    customGrid = prompt('Enter a Custom Grid');
    if (customGrid <= 100) {
        grid.forEach(function(item){
            item.remove();
        })
        for (let i = 0; i < (customGrid * customGrid); i++) {
            makeGrid = document.createElement('div');
            makeGrid.className = 'grid';
            makeGrid.style.width = document.getElementById('grid-container').offsetWidth / customGrid + "px";
            document.getElementById('grid-container').appendChild(makeGrid);
        }
    }
})

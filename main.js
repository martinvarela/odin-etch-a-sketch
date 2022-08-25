const DEFAULT_GRID_SIZE = 16;
const grid_container = document.querySelector('#grid-container');
const clear_button = document.querySelector('#clear-button');
const change_size_button = document.querySelector('#change-size-button');

clear_button.addEventListener("click", clearGrid);
change_size_button.addEventListener("click", changeSize);

function createGrid(grid_size){
  grid_container.style.gridTemplateColumns = `repeat(${grid_size},1fr`;
  grid_container.style.gridTemplateRows = `repeat(${grid_size}, 1fr)`;
  for (let i = 0; i < grid_size**2; i++) {
    const newGridItem = document.createElement('div');
    newGridItem.classList.add('grid-item');
    newGridItem.addEventListener('mouseover', hoverItem);
    grid_container.appendChild(newGridItem);
  }
}

function removeGrid(){
  grid_container.textContent = '';
}

function clearGrid(e) {
  items = document.querySelectorAll('.grid-item');
  items.forEach(item => item.classList.remove('hovered-item'));
}

function changeSize(e) {
  var input_size = prompt("Enter new grid size");
  var grid_size = parseInt(input_size);
  if (grid_size > 100) {
    grid_size = 100;
  } else if (!grid_size){
    grid_size = DEFAULT_GRID_SIZE;
  }
  removeGrid();
  createGrid(grid_size);
}

function hoverItem(e) {
  e.target.classList.add('hovered-item');
}

createGrid(DEFAULT_GRID_SIZE);

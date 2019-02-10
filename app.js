// @format

// Select a form
const sizePicker = document.getElementById('sizePicker');

// Select an input for width
const inputWidth = document.getElementById('inputWidth');

// Select an input for height
const inputHeight = document.getElementById('inputHeight');

// Select an input for color
const colorPicker = document.getElementById('colorPicker');

// Select a canvas
const pixelCanvas = document.getElementById('pixelCanvas');

// When a cell in the grid clicked, fill that cell with the chosen color
pixelCanvas.addEventListener('click', function(e) {
  if (e.target.nodeName === 'TD') {
    e.target.style.background = colorPicker.value;
  }
});

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid(inputWidth.value, inputHeight.value);
});

function makeGrid(width, height) {
  // Clear the canvas
  pixelCanvas.innerHTML = '';

  const fragment = document.createDocumentFragment();

  for (let h = 1; h <= height; h++) {
    let tr = document.createElement('tr');
    for (let w = 1; w <= width; w++) {
      tr.append(document.createElement('td'));
    }
    fragment.append(tr);
  }

  // Add a grid to the canvas
  pixelCanvas.append(fragment);
}

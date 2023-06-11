
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const items = document.querySelectorAll('.item');


items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});


container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);


function dragStart() {
  this.classList.add('dragging');
}

function dragEnd() {
  this.classList.remove('dragging');
}


function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  container2.classList.add('drag-enter');
}

function dragLeave() {
  container2.classList.remove('drag-enter');
}

function drop() {
  container2.classList.remove('drag-enter');
  const item = document.querySelector('.item.dragging');

  if (item) {
    container2.appendChild(item);
    showMessage('Item dropped successfully!');
  }
}


function resetContainers() {
  container1.innerHTML = `
    <div class="item" draggable="true">Item 1</div>
    <div class="item" draggable="true">Item 2</div>
    <div class="item" draggable="true">Item 3</div>
  `;
  container2.innerHTML = '';
  hideMessage();
}


function showMessage(message) {
  const successMessage = document.createElement('div');
  successMessage.classList.add('success-message');
  successMessage.textContent = message;
  document.body.appendChild(successMessage);
  setTimeout(() => {
    document.body.removeChild(successMessage);
  }, 2000);
}

function hideMessage() {
  const successMessage = document.querySelector('.success-message');
  if (successMessage) {
    document.body.removeChild(successMessage);
  }
}

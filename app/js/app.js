const list = document.querySelector('.list');
const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-btn');
const filter = document.querySelector('.filter');
const todos = list.children;
const clear = document.querySelector('.clear');
var checkBtn, deleteBtn, item, li;



addBtn.addEventListener('click', function(){
  addTodo();
  markTodo();
  updateCount();
  showFilter();
});

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTodo();
    markTodo();
    updateCount();
    showFilter();
   
  }
});

filter.addEventListener('change', function (e) {
  for (var item of todos) {
    switch (e.target.value) {
      case 'all':
        item.style.display = 'grid';
        break;

      case 'active':
        if (!item.classList.contains('completed')) {
          item.style.display = 'grid';
        } else {
          item.style.display = 'none';
        }
        break;

      case 'completed':
        if (item.classList.contains('completed')) {
          item.style.display = 'grid';
        } else {
          item.style.display = 'none';
        }
        break;
    }
  }
});

clear.addEventListener('click', function (e) {
  e.preventDefault();
  const completedItems = document.querySelectorAll('.completed');
  for (var item of completedItems) {
    item.remove();
  }
  showFilter();
});

function updateCount(e) {
  const countPara = document.querySelector('.todo-count');
  var todoCount = 0;
  for (var item of todos) {
    if (!item.classList.contains('completed')) {
      todoCount++;
    }
    countPara.innerHTML = `${todoCount} items left`;
  }
}

function showFilter(e) {
  if (todos.length > 0) {
    filter.parentElement.classList.remove('hide');
    filter;
  } else {
    filter.parentElement.classList.add('hide');
  }
}


function addTodo(e){
  li = document.createElement('li');
  item = document.createElement('div');
  checkBtn = document.createElement('i');
  deleteBtn = document.createElement('i');
  item.classList.add('item');
  checkBtn.classList.add('fas', 'fa-check-square', 'check-btn');
  deleteBtn.classList.add('fas', 'fa-window-close', 'delete-btn');
  li.innerHTML = input.value;
  input.value = '';
  item.append(checkBtn);
  item.append(li);
  item.append(deleteBtn);
  list.append(item);
}

function markTodo(){
    item.addEventListener('click', function(e){
      if (e.target.classList.contains('check-btn')){
        e.target.classList.toggle('checked-btn');
        e.target.parentElement.children[1].classList.toggle('check');
        e.target.parentElement.classList.toggle('completed');
      updateCount();
      } else if (e.target.classList.contains('delete-btn')){
        e.target.parentElement.classList.add('slideOut');
        setTimeout(() => {
          e.target.parentElement.remove();
          updateCount();
          showFilter();
        }, 300);
      }
    })
}

const list = document.querySelector('.list');
const input = document.querySelector('.input');
const filter = document.querySelector('.filter');
const todos = list.children;
const clear = document.querySelector('.clear');


input.addEventListener('keypress', function(e){
  if (e.key === 'Enter'){
    
    // create a li
    const li = document.createElement('li');
    const item = document.createElement('div');
    const checkBtn = document.createElement('i');
    const deleteBtn = document.createElement('i')
    item.classList.add('item')
    checkBtn.classList.add('fas', 'fa-check-square', 'check-btn');
    deleteBtn.classList.add('fas', 'fa-window-close', 'delete-btn');
    li.innerHTML = e.target.value;
    input.value = "";
    item.append(checkBtn);
    item.append(li);
    item.append(deleteBtn);
    list.append(item)
    updateCount();
    
    checkBtn.addEventListener('click', function(e){
      e.target.parentElement.children[1].classList.toggle('check');
      e.target.parentElement.classList.toggle('completed')
      updateCount();
    })
    
    deleteBtn.addEventListener('click', function(e){
      e.target.parentElement.remove();
      updateCount();
    })
    
  }
 
})




filter.addEventListener('change', function(e){
  for (var item of todos){
    switch (e.target.value) {
      case 'all':
        item.style.display = 'grid';
        break;

      case 'active':
        if (!item.classList.contains('completed')){
          item.style.display = 'grid';
        } else {
          item.style.display = 'none';
        }
        break;

      case 'completed':
        if (item.classList.contains('completed')){
          item.style.display = 'grid';
        } else {
          item.style.display = 'none';
        }
        break;

    }
}
})


clear.addEventListener('click', function(e){
  e.preventDefault();
  const completedItems = document.querySelectorAll('.completed');
  for (var item of completedItems){
    item.remove();
  }
})


function updateCount(e){
  const countPara = document.querySelector('.todo-count');
  var todoCount = 0;
  for (var item of todos){
    if (!item.classList.contains('completed')){
      todoCount++;
    }
    countPara.innerHTML = `${todoCount} items left`
  }
}

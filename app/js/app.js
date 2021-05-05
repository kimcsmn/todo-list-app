const list = document.querySelector('.list');
const input = document.querySelector('.input');

input.addEventListener('keypress', function(e){
  if (e.key === 'Enter'){

    // create a li
    const li = document.createElement('li');
    const item = document.createElement('div');
    const checkBtn = document.createElement('i');
    const deleteBtn = document.createElement('i')
    item.classList.add('item')
    checkBtn.classList.add('fas', 'fa-check-square');
    deleteBtn.classList.add('fas', 'fa-window-close');
    li.innerHTML = e.target.value;
    input.value = "";
    item.append(checkBtn);
    item.append(li);
    item.append(deleteBtn);
    list.append(item)

    checkBtn.addEventListener('click', function(e){
      e.target.parentElement.children[1].classList.toggle('check');
    })

    deleteBtn.addEventListener('click', function(e){
      e.target.parentElement.remove();
    })
  
  }


 
})
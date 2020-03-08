function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const toDoList = document.getElementById('toDoList');

  let id = 0;



function createNewToDo() {
   const newToDoText = document.getElementById('newToDoText');
   if (!newToDoText.value) {return;}


   toDos.push({
     title: newToDoText.value,
     complete: false,
     id: id
   });

   id++

   newToDoText.value = '';
   console.log(id);

   renderTheUI();
  }

function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

   toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteBtn = document.createElement('button');

      checkbox.type = "checkbox";
      deleteBtn.type = "button";
      deleteBtn.innerHTML = "delete To Do";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);

    });


      deleteBtn.addEventListener('click', event => {
        event.preventDefault();

        function removeItem() {
          for (var i = 0; i < toDos.length; i++ ){
            if( toDo.id < i && id == i){
              return true;
            }else{
              event.target.parentElement.remove();
            }
          }
        }
        console.log(removeItem());
        console.log(toDo.id);
        console.log( toDos.filter(removeItem));
        toDos = toDos.filter(function(item){
          return item.id ==! toDo.id;

      renderTheUI();
      });

      });

    });

  }












  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    });

 renderTheUI();



}




window.onload = function() {
  onReady();
};

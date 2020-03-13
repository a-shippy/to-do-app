function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  let toDos = [];
  let id = 0;

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () =>{
      event.preventDefault();
    });

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');

      checkbox.type = "checkbox";


      const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete!";

      deleteBtn.addEventListener('click', event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        })

        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);


    });
  }

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value){ return; }

    toDos.push({
      title: newToDoText.value,
      complete: false

    });

      id++;

      console.log(toDos);

    newToDoText.value = '';

    renderTheUI();
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


/*



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


      renderTheUI();
      });

      });

    };

  }












  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    });

 renderTheUI();








window.onload = function() {
  onReady();
};

*/

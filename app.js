function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const toDoList = document.getElementById('toDoList');
  const newToDoText = document.getElementById('newToDoText');

  addToDoForm.addEventListener('submit', (event) => {
     event.preventDefault();


  let title = newToDoText.value;

  let newLi = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";

   deleteBtn.addEventListener('click', function(event){
    // this.parentElement
    toDoList.removeChild(this.parentElement);
   })


   newLi.textContent = title;
   newLi.appendChild(checkbox);
   newLi.appendChild(deleteBtn);
   toDoList.appendChild(newLi);
   newToDoText.value = "";
  });
};

function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  let toDos = [];
  let id = 0;



function createNewToDo() {
   const newToDoText = document.getElementById('newToDoText');
   if (!newToDoText.value) { return; }


   toDos.push({
     title: newToDoText.value,
     complete: false
     id: id
   });

   id++;

   console.log(toDos);

   newToDoText.value = '';

   renderTheUI();
  }

function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

   toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete!";

      deleteBtn.addEventListener('click', event => {
        toDos = toDos.filter(function(item){
          return item.id ==! toDo.id;
        })
      renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);


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

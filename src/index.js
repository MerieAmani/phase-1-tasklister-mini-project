document.addEventListener("DOMContentLoaded", () => {

  //Creating a variable by taking ID for the form and tasklist
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  //submiting the form
  form.addEventListener("submit", (event) => {
    event.preventDefault();//prevent page from refreshing
    const taskDescription = document.getElementById("new-task-description").value;

    if (taskDescription) {
      const taskItem = document.createElement("li");//cretas list where the inputed tasks will be seen
      taskItem.textContent = taskDescription;//task inputed

      //delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskItem.remove();
      });

      taskItem.appendChild(deleteButton);//makes delete button appear nexxt to task item
      taskList.appendChild(taskItem);//adds the above to the taskItem

      form.reset();
    }
  });
});
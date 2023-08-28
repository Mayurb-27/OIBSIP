document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const pendingTasks = document.getElementById("pendingTasks");
  const completedTasks = document.getElementById("completedTasks");

  addButton.addEventListener("click", addTask);

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-button">Delete</button>
    `;

    li.querySelector(".delete-button").addEventListener("click", deleteTask);

    li.addEventListener("click", toggleComplete);

    pendingTasks.appendChild(li);
    taskInput.value = "";
  }

  function toggleComplete(event) {
    const li = event.target.closest("li");
    if (li) {
      if (li.classList.contains("completed-task")) {
        li.classList.remove("completed-task");
        pendingTasks.appendChild(li);
      } else {
        li.classList.add("completed-task");
        completedTasks.appendChild(li);
      }
    }
  }

  function deleteTask(event) {
    const li = event.target.closest("li");
    if (li) {
      if (li.parentElement === pendingTasks) {
        pendingTasks.removeChild(li);
      } else if (li.parentElement === completedTasks) {
        completedTasks.removeChild(li);
      }
    }
  }
});

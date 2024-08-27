// Elements
const form = document.getElementById("todo-form");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting

  const taskText = taskInput.value.trim(); // Get the task text

  if (taskText !== "") {
    addTask(taskText); // Add the task to the list
    taskInput.value = ""; // Clear the input field
  }
});

// Function to add a new task
function addTask(text) {
  const listItem = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = text;
  taskText.addEventListener("click", () => {
    taskText.classList.toggle("completed"); // Toggle the completed class
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    listItem.remove(); // Remove the task from the list
  });

  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
}

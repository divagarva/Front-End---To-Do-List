// Selecting elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Add a new task
addTaskBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Add 'Complete' functionality
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Add a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    removeBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    newTaskInput.value = "";
});

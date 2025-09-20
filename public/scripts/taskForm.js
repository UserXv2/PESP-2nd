document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Auto-generate task_id
  const task_id = tasks.length ? tasks[tasks.length - 1].task_id + 1 : 1;

  const newTask = {
    task_id,
    task_name: document.getElementById("task_name").value,
    start_date: document.getElementById("start_date").value,
    start_time: document.getElementById("start_time").value,
    end_date: document.getElementById("end_date").value,
    end_time: document.getElementById("end_time").value,
    category_type: document.getElementById("category_type").value,
    description: document.getElementById("description").value,
    recurring: document.getElementById("recurring").value,
    urgency_level: parseInt(document.getElementById("urgency_level").value, 10),
    subtasks: []
  };

  // Save task
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task saved!");
  window.location.href = "index.html"; // back to homepage
});

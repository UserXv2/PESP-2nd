document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('closeBtn');
  const centerButton = document.querySelector('header .center button');

  // Set center button text to page title
  if (centerButton) centerButton.textContent = document.title;

  // Load user setting from localStorage (default: true)
  let toggleMenuEnabled = localStorage.getItem('menuToggleEnabled');
  if (toggleMenuEnabled === null) toggleMenuEnabled = true;
  else toggleMenuEnabled = toggleMenuEnabled === 'true';

  if (!menuBtn || !sidebar) return;

  // Menu button click
  menuBtn.addEventListener('click', () => {
    if (toggleMenuEnabled) {
      // Toggle open/close
      sidebar.classList.toggle('active');
    } else {
      // Only open if closed
      if (!sidebar.classList.contains('active')) {
        sidebar.classList.add('active');
      }
    }
  });

  // Close button click (always closes sidebar)
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  }

  // Click outside sidebar to close (only in toggle mode)
  document.addEventListener('click', (e) => {
    if (!toggleMenuEnabled) return; // do nothing if toggle disabled
    if (!sidebar.contains(e.target) && e.target !== menuBtn) {
      sidebar.classList.remove('active');
    }
  });
});


// Load tasks from localStorage
function loadTasks() {
  const taskContainer = document.getElementById("taskContainer");
  taskContainer.innerHTML = ""; // clear before render

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Group tasks by category
  let categories = {};
  tasks.forEach(task => {
    if (!categories[task.category_type]) {
      categories[task.category_type] = [];
    }
    categories[task.category_type].push(task);
  });

  // Render categories and tasks
  for (let category in categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category-group");

    const title = document.createElement("h4");
    title.textContent = category;
    categoryDiv.appendChild(title);

    categories[category].forEach(task => {
      const link = document.createElement("a");
      link.href = `task${task.id}.html`;

      const btn = document.createElement("button");
      btn.classList.add("task-btn");
      btn.textContent = task.task_name;

      link.appendChild(btn);
      categoryDiv.appendChild(link);
    });

    taskContainer.appendChild(categoryDiv);
  }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

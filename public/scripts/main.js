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

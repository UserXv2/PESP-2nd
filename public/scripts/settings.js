document.addEventListener("DOMContentLoaded", () => {
  const menuToggleSetting = document.getElementById('menuToggleSetting');

  // Load setting from localStorage (default: true)
  let toggleMenuEnabled = localStorage.getItem('menuToggleEnabled');
  if (toggleMenuEnabled === null) toggleMenuEnabled = true;
  else toggleMenuEnabled = toggleMenuEnabled === 'true';
  menuToggleSetting.checked = toggleMenuEnabled;

  // Update localStorage when user changes the setting
  menuToggleSetting.addEventListener('change', () => {
    localStorage.setItem('menuToggleEnabled', menuToggleSetting.checked);
  });
});

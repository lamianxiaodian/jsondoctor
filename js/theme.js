// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;
  
  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.className = savedTheme;
  updateToggleText();
  
  toggle.addEventListener('click', function() {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    updateToggleText();
  });
  
  function updateToggleText() {
    if (!toggle) return;
    const isLight = document.body.className === 'light';
    toggle.innerHTML = isLight ? '<span>🌙</span> Dark Mode' : '<span>☀️</span> Light Mode';
  }
});
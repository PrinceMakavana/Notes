
function toggleTheme() {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', root.dataset.theme);
}

function themePlugin(hook) {
    hook.mounted(function () {
      const sidebar = document.querySelector('.sidebar');
      const themeSwitchElement = document.createElement('div');
      themeSwitchElement.className = 'theme-switch-wrap';

      const themePickerElement = document.createElement('div');
      themePickerElement.className = 'theme-picker';

      const button = document.createElement('button');
      button.className = 'theme-trigger';
      button.textContent = 'Toggle Theme';
      button.onclick = toggleTheme;

      sidebar.appendChild(themeSwitchElement);
      themeSwitchElement.appendChild(themePickerElement);
      themePickerElement.appendChild(button);
    })
}
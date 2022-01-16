// função para definir um tema
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// função para alterar entre os temas
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

// Função invocada para definir o tema no carregamento inicial
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      document.getElementById('slider').checked = false;
  } else {
      setTheme('theme-light');
    document.getElementById('slider').checked = true;
  }
})();
let darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
var root_css = document.querySelector(':root');

if (darkmode){
    root_css.style.setProperty('--foreground-color', 'var(--dark-mode-foreground-color)');
    root_css.style.setProperty('--background-color', 'var(--dark-mode-background-color)');
}
else {
    root_css.style.setProperty('--foreground-color', 'var(--light-mode-foreground-color)');
    root_css.style.setProperty('--background-color', 'var(--light-mode-background-color)');

}


window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
    root_css.style.setProperty('--foreground-color', 'var(--dark-mode-foreground-color)');
    root_css.style.setProperty('--background-color', 'var(--dark-mode-background-color)');
    dark_mode_button.classList.add("fa-moon")

  } else {
    root_css.style.setProperty('--foreground-color', 'var(--light-mode-foreground-color)');
    root_css.style.setProperty('--background-color', 'var(--light-mode-background-color)');

  }
})


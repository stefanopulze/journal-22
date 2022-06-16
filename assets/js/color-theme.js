const toggleButton = document.querySelector('.toggle-theme-style')
toggleButton.addEventListener('click', () => {
    const prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const currentTheme = document.documentElement.getAttribute('data-theme') || prefersTheme;
    const switchToTheme = currentTheme === "dark" ? "light" : "dark"

    if (prefersTheme === switchToTheme) {
        document.documentElement.removeAttribute('data-theme')
    } else {
        document.documentElement.setAttribute('data-theme', switchToTheme);
    }
})
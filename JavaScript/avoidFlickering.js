darkMode = localStorage.getItem("dark-mode"); 

if (darkMode === 'disabled') {
    document.body.classList.add("Light-theme");
} else {
    document.body.classList.remove("Light-theme");
}
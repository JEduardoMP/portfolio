function toggleMenu() {
    const menu = document.getElementById("main-menu");
    if (mql.matches){
        menu.classList.toggle("visible")
    }
}
var mql = window.matchMedia("(max-width: 768px)");
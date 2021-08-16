function scrollMenu() {
    for (let i = 0; i < main.length; i++) {
        console.log(i)
    }
    // if (main.onclick) {
    //     window.scrollTo(0, about.offsetHeight - 60);
    // } else if (document.onclick = main) {
    //     window.scrollTo(0, services.offsetHeight - 60);
    // } else {
    //     window.scrollTo(0, contact.offsetHeight - 60);
    // }
}
document.onclick = scrollMenu
var about = document.getElementById('about-me');
var services = document.getElementById('services-section');
var contact = document.getElementById('contact-me')
var main = document.getElementById('main-menu')
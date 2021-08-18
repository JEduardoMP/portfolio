// Sections
const about = document.getElementById('about-me');
const services = document.getElementById('services-section');
const contact = document.getElementById('contact-me');
const main = document.getElementById('main-menu');

// Top sections
let aboutOffset = about.offsetHeight - 60;
let servicesOffset = services.offsetHeight;
let contactOffset = contact.offsetHeight;

// Nav buttons
const aboutNav = document.getElementsByClassName('navigation');

function scrollMenu() {
    for (let i = 0; i < aboutNav.length; i++) {
        const element = aboutNav[i];
        console.log(aboutNav[0])
    }
}
document.onclick = scrollMenu
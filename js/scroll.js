// Sections
const about = document.getElementById('about-me');
const services = document.getElementById('services-section');
const contact = document.getElementById('contact-me');

// Top sections
let aboutOffset = about.offsetTop - 60;
let servicesOffset = services.offsetTop - 60;
let contactOffset = contact.offsetTop;

// Nav buttons
const aboutNav = document.querySelector('.about-nav');
const servicesNav = document.querySelector('.services-nav');
const contactNav = document.querySelector('.contact-nav')

function scrollAbout() {
    window.scrollTo(0, aboutOffset)
}
function scrollServices() {
    window.scrollTo(0, servicesOffset)
}
function scrollContact() {
    window.scrollTo(0, contactOffset);
}
aboutNav.onclick = scrollAbout
servicesNav.onclick = scrollServices
contactNav.onclick = scrollContact

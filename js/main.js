var copyrightYear_el = document.querySelector('#copyright-year');


// ScrollReveal().reveal('#section-home');
// ScrollReveal().reveal('#section-projects');
// ScrollReveal().reveal('#section-languages');
// ScrollReveal().reveal('#section-contact');
// ScrollReveal().reveal('');
ScrollReveal().reveal('ScrollReveal', {interval: 40});
// ScrollReveal().reveal('.card');
// ScrollReveal().reveal('.languages-grid-item');
ScrollReveal().reveal('.reveal-navbar ', {interval: 40});
ScrollReveal().reveal('.card', {interval: 40});
ScrollReveal().reveal('.languages-grid-item', {interval: 40});


window.addEventListener('load', function (ev) {

    copyrightYear_el.innerHTML = new Date().getFullYear();

});
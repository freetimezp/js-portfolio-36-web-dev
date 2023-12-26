let navbar = document.querySelector('nav');

window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.style.background = 'rgba(255, 255, 255, .8)';
    } else {
        navbar.style.background = 'transparent';
    }
};

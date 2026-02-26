let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let navLink = document.querySelectorAll('.nav-link');
let body = document.querySelector('body')

burger.addEventListener('click', function () {
    nav.classList.toggle('nav--open')
    body.classList.toggle('body--lock')
});

document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open')
    }
});


navLink.forEach((link) => {
    link.addEventListener('click', function () {
        nav.classList.remove('nav--open')
    })
});


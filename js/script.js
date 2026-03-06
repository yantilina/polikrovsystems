let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let navLink = document.querySelectorAll('.nav-link');
let body = document.querySelector('body')
let scrollTopBtn = document.querySelector('.scroll-top')
let tabs = document.querySelectorAll('.tab')
let variants = document.querySelectorAll('.service-technology__variant')
let serviceTech = document.querySelector('.service-technology')


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


window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('scroll-top--visible')
    } else {
        scrollTopBtn.classList.remove('scroll-top--visible')
    }
})

scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


function clearActive() {
    tabs.forEach((btn) => btn.classList.remove('tab--active'))
    variants.forEach((variant) => variant.classList.remove('variant--active'))
}


tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        clearActive();
        tab.classList.add('tab--active')
        variants[index].classList.add('variant--active')
        serviceTech.scrollIntoView({ behavior: 'smooth' })
    })
})


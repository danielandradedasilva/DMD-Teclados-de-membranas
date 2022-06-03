const target = document.querySelectorAll('.coll-box');
const ctaBoxTxt = document.querySelectorAll('.box-text');
const navPerson = document.querySelector('.navbar');
const logoPerson = document.querySelector('.navbar-brand .logo');
const animationClass = 'coll';

function AnimeScroll() {
    const windownTop = window.pageYOffset + 700;

    target.forEach(function(e) {
        if ((windownTop) > e.offsetTop) {
            e.classList.add('coll');
        } else if (windownTop < e.offsetTop) {
            e.classList.remove('coll');
        }
    })

    ctaBoxTxt.forEach(function(e) {
        if ((windownTop) > e.offsetTop) {
            e.classList.add('cta-txt');
        } else if (windownTop < e.offsetTop) {
            e.classList.remove('cta-txt');
        }
    })

    const windownTopNav = window.pageYOffset;

    if (windownTopNav >= 50) {
        navPerson.classList.add('navbar-person');
        logoPerson.setAttribute('id', 'logo-person')
    } else {
        navPerson.classList.remove('navbar-person');
        logoPerson.removeAttribute('id');
    }
}



window.addEventListener('scroll', AnimeScroll);
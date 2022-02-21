// Get the navbar
var navbar = document.getElementById('navbar')

window.onscroll = function () {
    'use strict'
    if (
        document.body.scrollTop >= 320 ||
        document.documentElement.scrollTop >= 380
    ) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}

const avatar = document.querySelector('#avatar')

avatar.addEventListener('mouseenter', () => {
    if (!avatar.classList.contains('hover')) {
        avatar.classList.add('hover')
    }
})

avatar.addEventListener('mouseleave', () => {
    avatar.classList.remove('hover')
})

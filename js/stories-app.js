const openMenu = document.querySelector('#menu-btn')
const closeMenu = document.querySelector('#menu-close')
const navList = document.querySelector('ul')

openMenu.addEventListener('click', function() {
    navList.classList.add('active')
})

closeMenu.addEventListener('click', function() {
    navList.classList.remove('active')
})
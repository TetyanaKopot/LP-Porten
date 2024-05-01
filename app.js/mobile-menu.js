const mobileMenu = document.querySelector('.mobile-menu')
const menuBtnOpen = document.querySelector('.menu-btn-open')
const menuBtnClose = document.querySelector('.menu-btn-close')
const links = document.querySelectorAll('.menu-link')

const open = () => mobileMenu.classList.add('is-open')
const close = () => mobileMenu.classList.remove('is-open')

menuBtnOpen.addEventListener('click', open)
menuBtnClose.addEventListener('click', close)

links.forEach(function (link) {
  link.addEventListener('click', close)
})

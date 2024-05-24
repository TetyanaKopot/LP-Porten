export const cart = document.querySelector('.cart')
const cartTitle = document.querySelector('.cart__header-title')

const cartBtnOpen = document.querySelector('.button-cart')
const catrBtnClose = document.querySelector('.cart-btn-close')
const returnButton = document.querySelector('.button__return')

export const openCart = () => {
  cart.classList.remove('close'), (cartTitle.innerText = 'Ваш кошик порожній')
}
export const closeCart = () => cart.classList.add('close')

cartBtnOpen.addEventListener('click', openCart)
catrBtnClose.addEventListener('click', closeCart)
returnButton.addEventListener('click', closeCart)

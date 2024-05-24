import { watchCardWrapper, watchCard } from '../cards/create-cards.mjs'
import { createCard } from '../cards/create-cards.mjs'
import { openCart } from './open-close-cart.mjs'
import { closeCart } from './open-close-cart.mjs'

export const cartContainer = document.querySelector('.cart__container')
const cartTitle = document.querySelector('.cart__header-title')
const orders = document.getElementsByClassName('cart-card')

const cartSign = document.querySelector('.button-cart__sign')
const totalWrapper = document.querySelector('.cart-card__total-wrapper')
const total = document.querySelector('.cart-card__total-wrapper--total')
const orderButton = document.querySelector('.button__order')

export const addToOrder = (elem) => {
  const cardActions = document.createElement('div')
  const subtractQuantity = document.createElement('button')
  const addQuantity = document.createElement('button')
  const quantity = document.createElement('input')
  const sum = document.createElement('h3')

  cardActions.classList.add('cart-card__actions')
  subtractQuantity.classList.add('cart-card__actions--substract', 'button')
  addQuantity.classList.add('cart-card__actions--add', 'button')
  quantity.classList.add('cart-card__actions--quantity')
  sum.classList.add('cart-card__sum')

  subtractQuantity.innerText = '-'
  addQuantity.innerText = '+'
  quantity.type = 'text'
  quantity.min = 1
  quantity.value = 1
  quantity.addEventListener('change', getCurrentTotal)
  totalWrapper.classList.remove('none')
  cartSign.classList.remove('none')
  orderButton.classList.remove('none')

  const subtract = (event) => {
    if (quantity.value <= 1) {
      quantity.value--
      event.target.parentElement.parentElement.remove()
    }
    quantity.value--
    if (cartContainer.childElementCount < 1) {
      cartTitle.classList.remove('none')
      totalWrapper.classList.add('none')
      cartSign.classList.add('none')
      orderButton.classList.add('none')
    }
    getCurrentTotal()
  }

  subtractQuantity.addEventListener('click', subtract)
  addQuantity.addEventListener('click', () => {
    quantity.value++
    getCurrentTotal()
  })

  let currentTotal = 0
  let currentAmount = 0
  for (const order of orders) {
    const quantity = order.querySelector('.cart-card__actions > input')
    const sum = order.querySelector('.cart-card__sum')
    if (elem.id === +order.id) {
      quantity.value++
      sum.innerText = `${parseFloat(elem.price) * quantity.value} грн.`
      getCurrentTotal()
      return
    }
  }

  createCard(elem)

  cardActions.append(subtractQuantity, quantity, addQuantity, sum)
  watchCardWrapper.append(cardActions)
  cartContainer.append(watchCardWrapper)

  watchCardWrapper.classList.add('cart-card')
  watchCard.classList.add('cart-card__watch-card')
  openCart()

  cartTitle.classList.add('none')
  function getCurrentTotal() {
    let currentSum = parseFloat(elem.price) * quantity.value
    sum.innerText = `${currentSum} грн.`
    for (const order of orders) {
      const amount = order.querySelector('.cart-card__actions > input')
      const sum = order.querySelector('.cart-card__sum')
      currentAmount += parseFloat(amount.value)
      currentSum = parseFloat(sum.innerText)
      currentTotal += currentSum
      total.innerText = `${currentTotal} грн.`
      cartSign.innerText = `${currentAmount}`
    }
    currentTotal = 0
    currentAmount = 0
  }

  getCurrentTotal()

  const orderProducts = () => {
    for (const order of orders) {
      order.remove()
    }
    ;(cartTitle.innerText = 'Ваше замовлення прийнято'),
      cartTitle.classList.remove('none'),
      totalWrapper.classList.add('none'),
      cartSign.classList.add('none'),
      orderButton.classList.add('none')
  }
  orderButton.addEventListener('click', orderProducts, closeCart)
}

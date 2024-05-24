import { products } from '../products.mjs'
import { addToOrder } from '../cart/add-cards.mjs'

export const presentationCards = document.querySelector(
  '.presentation__last-cards'
)
export const newArrivalsCards = document.querySelector('.new-arrivals__cards')

export let watchCardWrapper
export let watchCard

export function createCard(elem) {
  watchCardWrapper = document.createElement('li')
  watchCard = document.createElement('div')
  const watchCardImageArea = document.createElement('div')
  const watchCardImage = document.createElement('img')
  const watchCardName = document.createElement('h3')
  const watchCardPrice = document.createElement('p')

  watchCardWrapper.classList.add('watch-card-wrapper')
  watchCard.classList.add('watch-card')
  watchCardImageArea.classList.add('watch-card__image-area')
  watchCardImage.classList.add('watch-card__image-area--image')
  watchCardName.classList.add('watch-card__name')
  watchCardPrice.classList.add('watch-card__price')

  watchCardWrapper.id = elem.id
  watchCard.addEventListener('click', () => addToOrder(elem))
  watchCardImage.src = elem.image
  watchCardImage.alt = elem.name
  watchCardImage.title = 'Add to cart'
  watchCardName.innerText = elem.name
  watchCardPrice.innerText = `${elem.price
    .split('')
    .slice(0, -3)
    .join('')} ${elem.price.split('').slice(-3).join('')} грн.`

  watchCardImageArea.appendChild(watchCardImage)
  watchCard.append(watchCardImageArea, watchCardName, watchCardPrice)
  watchCardWrapper.appendChild(watchCard)
}
products.forEach((elem, index) => {
  createCard(elem)

  index <= 2
    ? presentationCards.append(watchCardWrapper)
    : newArrivalsCards.append(watchCardWrapper)

  if (index > 10) {
    watchCardWrapper.classList.add('more-cards', 'is-hidden')
  }
})

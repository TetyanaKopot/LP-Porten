import { products } from './products.js'
console.log(products)

const presentationCards = document.querySelector('.presentation__last-cards')
const newArrivalsCards = document.querySelector('.new-arrivals__cards')

products.forEach((elem, index) => {
  const watchCard = document.createElement('li')
  const watchCardImageArea = document.createElement('div')
  const watchCardImage = document.createElement('img')
  const watchCardName = document.createElement('h3')
  const watchCardPrice = document.createElement('p')
  watchCard.classList.add('watch-card')
  watchCardImageArea.classList.add('watch-card__image-area')
  watchCardImage.classList.add('watch-card__image-area--image')
  watchCardName.classList.add('watch-card__name')
  watchCardPrice.classList.add('watch-card__price')

  watchCardImage.src = elem.image
  watchCardImage.alt = elem.name
  watchCardName.innerText = elem.name
  watchCardPrice.innerText = `${elem.price} грн.`

  watchCardImageArea.appendChild(watchCardImage)
  watchCard.append(watchCardImageArea, watchCardName, watchCardPrice)

  index <= 2
    ? presentationCards.append(watchCard)
    : newArrivalsCards.append(watchCard)

  if (index > 10) {
    watchCard.classList.add('more-cards', 'is-hidden')
  }
})

newArrivalsCards.childNodes[7].classList.add('last-card')
const lastCard = document.querySelector('.last-card')

lastCard.firstChild.classList.add('last-card__image-area')
const lastCardImageArea = document.querySelector('.last-card__image-area')

const moreCardsBtn = document.createElement('button')
moreCardsBtn.innerText = 'ПОКАЗАТИ ВСІ'
moreCardsBtn.classList.add('button', 'more-cards-btn')
lastCardImageArea.appendChild(moreCardsBtn)

const moreCards = document.querySelectorAll('.more-cards')

moreCardsBtn.onclick = function () {
  moreCards.forEach((element) => {
    element.classList.remove('is-hidden')
  })
  this.classList.add('free')
  lastCard.childNodes[1].classList.add('free')
  lastCard.childNodes[2].classList.add('free')
  lastCard.firstChild.firstChild.classList.add('free')
}

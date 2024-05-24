import { newArrivalsCards } from './create-cards.mjs'

newArrivalsCards.childNodes[7].firstChild.classList.add('last-card')
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

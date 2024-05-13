const products = [
  {
    id: 1,
    image: (src = '../images/watch1.png'),
    name: 'Carl von Zeyten',
    price: 16500,
  },
  {
    id: 2,
    image: (src = '../images/watch2.png'),
    name: 'JORD AR5905',
    price: 65000,
  },
  {
    id: 3,
    image: (src = '../images/watch3.png'),
    name: 'Emporio Armani Sportivo ',
    price: 165000,
  },
  {
    id: 4,
    image: (src = '../images/watch1.png'),
    name: 'Carl von Zeyten',
    price: 16500,
  },
  {
    id: 5,
    image: (src = '../images/watch2.png'),
    name: 'JORD AR5905',
    price: 65000,
  },
  {
    id: 6,
    image: (src = '../images/watch3.png'),
    name: 'Emporio Armani Sportivo ',
    price: 165000,
  },
  {
    id: 7,
    image: (src = '../images/watch4.png'),
    name: 'Rolex Oyster Perpetual',
    price: 280000,
  },
  {
    id: 8,
    image: (src = '../images/watch5.png'),
    name: 'Louis XVI ATHOS',
    price: 165000,
  },
  {
    id: 9,
    image: (src = '../images/watch6.png'),
    name: 'U-Boat Italo Fontana',
    price: 18700,
  },
  {
    id: 10,
    image: (src = '../images/watch7.png'),
    name: "Gucci Men's G",
    price: 18500,
  },
  {
    id: 11,
    image: (src = '../images/watch2.png'),
    name: 'JORD AR5905',
    price: 65000,
  },

  {
    id: 12,
    image: (src = '../images/watch3.png'),
    name: 'Emporio Armani Sportivo ',
    price: 165000,
  },
  {
    id: 13,
    image: (src = '../images/watch4.png'),
    name: 'Rolex Oyster Perpetual',
    price: 280000,
  },
  {
    id: 14,
    image: (src = '../images/watch5.png'),
    name: 'Louis XVI ATHOS',
    price: 165000,
  },
  {
    id: 15,
    image: (src = '../images/watch6.png'),
    name: 'U-Boat Italo Fontana',
    price: 18700,
  },
]
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

lastCard.childNodes[0].classList.add('last-card__image-area')
const lastCardImageArea = document.querySelector('.last-card__image-area')

const moreCardsBtn = document.createElement('button')

moreCardsBtn.innerText = 'ПОКАЗАТИ ВСІ'
moreCardsBtn.classList.add('button', 'more-cards-btn')

lastCardImageArea.appendChild(moreCardsBtn)

moreCards = document.querySelectorAll('.more-cards')

moreCardsBtn.onclick = function () {
  moreCards.forEach((element) => {
    element.classList.remove('is-hidden')
  })
  this.classList.add('free')
  lastCard.childNodes[1].classList.add('free')
  lastCard.childNodes[2].classList.add('free')
}

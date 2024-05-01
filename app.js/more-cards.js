moreCardsBtn = document.querySelector('.more-cards-btn')
moreCards = document.querySelectorAll('.more-cards')
lastCard = document.querySelector('.last-card')

moreCardsBtn.onclick = function (event) {
  moreCards.forEach((element) => {
    element.classList.remove('is-hidden')
  })

  this.classList.add('free')
  lastCard.classList.add('free')
}

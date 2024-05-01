const modal = document.querySelector('.backdrop')
const modalBtnOpen = document.querySelectorAll('.modal-login-btn-open')
const modalBtnClose = document.querySelector('.modal-login-btn-close')

const toggleModal = () => modal.classList.toggle('is-hidden')
function toggleElem(elem) {
  elem.addEventListener('click', toggleModal)
}

modalBtnOpen.forEach(toggleElem)
modalBtnClose.addEventListener('click', toggleModal)

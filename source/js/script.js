let buttonMenu = document.querySelector('.page-header__toggle');
let dropMenu = document.querySelector('.navigation');
let header = document.querySelector('.page-header');
let navigation = document.querySelector('.navigation');
let openModalBtns = document.querySelectorAll('[data-open-modal]');
let modal = document.querySelector('.modal');

navigation.classList.remove('navigation--no-js');
header.classList.remove('page-header--no-js');

buttonMenu.addEventListener('click', function () {
  buttonMenu.classList.toggle('page-header__toggle--clossed');
  dropMenu.classList.toggle('navigation--open');
})

if (openModalBtns.length !== 0 && modal) {
  openModalBtns.forEach(btn => btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal--show');
  }))

  modal.addEventListener('click', (evt) => {
    let target = evt.target;

    if (target.matches('.modal')) {
      modal.classList.remove('modal--show');
    }
  })
}

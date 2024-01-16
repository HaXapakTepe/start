document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')

  const toggleMenu = () => {
    menu.classList.toggle('menu--active')
    burger.classList.toggle('burger--active')
    body.classList.toggle('no-scroll')
  }

  const clickOutsideMenu = (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      menu.classList.remove('menu--active')
      burger.classList.remove('burger--active')
      body.classList.remove('no-scroll')
    }
  }

  burger.addEventListener('click', toggleMenu)
  document.addEventListener('click', clickOutsideMenu)

  // if (burger) {
  //   menuItem.forEach((item) => {
  //     item.addEventListener('click', () => {
  //       burger.classList.toggle('active')
  //       menu.classList.remove('active')
  //       body.classList.remove('no-scroll')
  //     })
  //   })
  // }
})

if (document.querySelector('[name="phone"]')) {
  const element = document.querySelector('[name="phone"]')
  const maskOptions = {
    mask: '+{7} 000 000 00 00',
  }
  const mask = IMask(element, maskOptions)
}
// $(document).ready(function () {})

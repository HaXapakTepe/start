document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const menuItem = document.querySelectorAll('.menu__item')
	const close = document.querySelector('.menu__close')

	const toggleMenu = () => {
		menu.classList.toggle('menu--active')
		burger.classList.toggle('burger--active')
		body.classList.toggle('no-scroll')
	}

	const clickOutsideMenu = event => {
		if (!menu.contains(event.target) && !burger.contains(event.target)) {
			menu.classList.remove('menu--active')
			burger.classList.remove('burger--active')
			body.classList.remove('no-scroll')
		}
	}

	close.addEventListener('click', toggleMenu)
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

	// показать элементы
	const affiliate = document.querySelector('.affiliate')
	if (affiliate) {
		const contentCard = affiliate.querySelectorAll(
			'.affiliate__cards table > tbody > tr:not(tr table tr), ' +
				'.affiliate__cards--alt table > tbody > tr:not(tr table tr)'
		)

		let isAllVisible = true

		function toggleCards() {
			if (isAllVisible) {
				contentCard.forEach((card, index) => {
					if (index >= 5) {
						card.style.display = 'none'
					} else if (index <= 4) {
						card.style.display = 'grid'
					}
				})
			} else {
				contentCard.forEach((card, index) => {
					card.style.display = 'grid'
				})
			}
			isAllVisible = !isAllVisible
		}

		toggleCards()

		affiliate.addEventListener('click', function (e) {
			const showMoreButton = e.target.closest('.showMore')
			if (showMoreButton) {
				toggleCards()
			}
		})
	}

	function handleTabClick(
		tabs,
		pages,
		activeTabClass,
		activePageClass,
		opacityPageClass
	) {
		tabs.forEach((tab, idx) => {
			tab.addEventListener('click', () => {
				tabs.forEach(tab => tab.classList.remove(activeTabClass))
				pages.forEach(page => {
					page.classList.remove(activePageClass)
					page.classList.remove(opacityPageClass)
				})

				tab.classList.add(activeTabClass)
				pages[idx].classList.add(activePageClass)

				setTimeout(() => {
					pages[idx].classList.add(opacityPageClass)
				}, 380)
			})
		})
	}

	const tabs = document.querySelectorAll('.tab__target')
	const pages = document.querySelectorAll('.tab__info')

	handleTabClick(
		tabs,
		pages,
		'tab__target--active',
		'tab__info--active',
		'tab__info--opacity'
	)

	const accordion = document.querySelectorAll('.accordion')

	const handleAccordionClick = acc => {
		const content = acc.querySelector('.accordion__content')
		if (acc.classList.contains('accordion--active')) {
			acc.classList.remove('accordion--active')
			content.style.maxHeight = '0'
		} else {
			acc.classList.add('accordion--active')
			content.style.maxHeight = content.scrollHeight + 'px'
		}
	}

	if (accordion) {
		accordion.forEach(acc => {
			acc.addEventListener('click', e => {
				if (e.target.classList.contains('accordion__content') || e.target.closest('.accordion__content')) {
					return
				}

				const isMobile = window.innerWidth < 992 && acc.classList.contains('accordion--mobile')
				if (isMobile || !acc.classList.contains('accordion--mobile')) {
					handleAccordionClick(acc)
				}
			})
		})
	}

	// accordion?.forEach(acc => {
	// 	acc.addEventListener('click', e => {
	// 		e.preventDefault()
	// 		// const content = acc.querySelector('.accordion__content')
	// 		const content = acc.nextElementSibling
	// 		if (acc.classList.contains('accordion--active')) {
	// 			acc.classList.remove('accordion--active')
	// 			content.style.maxHeight = '0'
	// 		} else {
	// 			acc.classList.add('accordion--active')
	// 			content.style.maxHeight = content.scrollHeight + 'px'
	// 		}
	// 	})
	// })

	// const accordion = document.querySelectorAll('.accordion')

	// if (accordion) {
	// 	accordion.forEach(acc => {
	// 		acc.addEventListener('click', () => {
	// 			const content = acc.querySelector('.accordion__content')

	// 			if (acc.classList.contains('accordion--active')) {
	// 				acc.classList.remove('accordion--active')
	// 				content.style.maxHeight = '0'
	// 			} else {
	// 				acc.classList.add('accordion--active')
	// 				content.style.maxHeight = `${content.scrollHeight}px`
	// 			}
	// 		})
	// 	})

	// 	document.addEventListener('click', e => {
	// 		const isAccordionClicked = e.target.closest('.accordion')

	// 		if (!isAccordionClicked) {
	// 			accordion.forEach(acc => {
	// 				const content = acc.querySelector('.accordion__content')
	// 				acc.classList.remove('accordion--active')
	// 				content.style.maxHeight = '0'
	// 			})
	// 		}
	// 	})
	// }

	// accordion?.forEach(acc => {
	// 	acc.addEventListener('click', function (e) {
	// 		const content = this.querySelector('.accordion__content')
	// 		if (!this.classList.contains('accordion--active')) {
	// 			accordion.forEach(otherAcc => {
	// 				if (otherAcc !== this) {
	// 					const otherContent = otherAcc.querySelector('.accordion__content')
	// 					otherAcc.classList.remove('accordion--active')
	// 					otherContent.style.maxHeight = '0'
	// 				}
	// 			})
	// 			this.classList.add('accordion--active')
	// 			content.style.maxHeight = content.scrollHeight + 'px'
	// 		} else {
	// 			this.classList.remove('accordion--active')
	// 			content.style.maxHeight = '0'
	// 		}
	// 	})
	// })

	// accordionAlt?.forEach(acc => {
	// 	acc.addEventListener('click', function (e) {
	// 		const content = this.querySelector('.accordionAlt__content')
	// 		if (!e.target.closest('.accordionAlt__content')) {
	// 			if (!this.classList.contains('accordionAlt--active')) {
	// 				accordionAlt.forEach(otherAcc => {
	// 					if (otherAcc !== this) {
	// 						const otherContent = otherAcc.querySelector(
	// 							'.accordionAlt__content'
	// 						)
	// 						otherAcc.classList.remove('accordionAlt--active')
	// 						otherContent.style.maxHeight = '0'
	// 					}
	// 				})
	// 				this.classList.add('accordionAlt--active')
	// 				content.style.maxHeight = content.scrollHeight + 'px'
	// 			} else {
	// 				this.classList.remove('accordionAlt--active')
	// 				content.style.maxHeight = '0'
	// 			}
	// 		}
	// 	})
	// })

	// const accordions = document.querySelectorAll('.accordion')
	// const contents = document.querySelectorAll('.accordion-content')

	// accordions?.forEach((acc, index) => {
	//   acc.addEventListener('click', (e) => {
	//     e.preventDefault()

	//     const content = contents[index]

	//     if (acc.classList.contains('accordion--active')) {
	//       acc.classList.remove('accordion--active')
	//       content.style.maxHeight = '0'
	//     } else {
	//       acc.classList.add('accordion--active')
	//       content.style.maxHeight = content.scrollHeight + 'px'
	//     }
	//   })
	// })

	const count = document.querySelectorAll('.count')

	count?.forEach(element => {
		element.addEventListener('click', function (event) {
			const e = event.target
			const num = element.querySelector('.count__num')
			let sum = +num.innerHTML

			if (e.classList.contains('count__plus')) {
				++sum
				num.innerHTML = sum
			}
			if (e.classList.contains('count__minus')) {
				if (sum > 1) {
					--sum
					num.innerHTML = sum
				}
			}
		})
	})

	const menuLinks = document.querySelectorAll('[class][data-goto]')

	if (menuLinks.length > 0) {
		menuLinks.forEach(link => {
			link.addEventListener('click', onMenuLinkClick)
		})

		function onMenuLinkClick(e) {
			const link = e.target
			if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
				const gotoBlock = document.querySelector(link.dataset.goto)
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top
				window.scrollBy({
					top: gotoBlockValue,
					behavior: 'smooth',
				})
				e.preventDefault()
			}
		}
	}

	// альтернатива
	const headerOffset = document.querySelector('header').offsetHeight

	// Функция для плавной прокрутки
	function smoothScroll(event) {
		event.preventDefault() // Отменяем стандартное поведение ссылки

		const targetId = this.getAttribute('href').substring(1) // Получаем целевой id
		const targetElement = document.getElementById(targetId) // Находим элемент по id

		if (targetElement) {
			const elementPosition =
				targetElement.getBoundingClientRect().top +
				window.pageYOffset -
				headerOffset // Рассчитываем позицию для прокрутки
			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth', // Плавная прокрутка
			})
		}
	}

	// Обрабатываем события клика на родительском элементе
	document.body.addEventListener('click', event => {
		// Проверяем, является ли клик на ссылку, начинающуюся с #
		const link = event.target.closest('a[href^="#"]')
		if (link) {
			smoothScroll.call(link, event) // Вызываем функцию smoothScroll с контекстом ссылки
			console.log(link)
		}
	})

	if (document.querySelector('[name="phone"]')) {
		const element = document.querySelector('[name="phone"]')
		const maskOptions = {
			mask: '+{7} 000 000 00 00',
		}
		const mask = IMask(element, maskOptions)
	}

	// input num
	if (document.querySelector('[name="sum"]')) {
		const element = document.querySelector('[name="sum"]')
		const maskOptions = {
			mask: Number,
			scale: 0, // digits after point, 0 for integers
			signed: false, // disallow negative
			thousandsSeparator: ' ', // any single char
			padFractionalZeros: false,
			normalizeZeros: true,
			radix: ',', // fractional delimiter
			mapToRadix: [','],
		}
		const mask = IMask(element, maskOptions)
	}

	// if (document.querySelector('.certificate__swiper')) {
	// 	var certificateSwiper = new Swiper('.certificate__swiper', {
	// 		slidesPerView: 4,
	// 		spaceBetween: 20,
	// 		breakpoints: {
	// 			993: {
	// 				slidesPerView: 4,
	// 			},
	// 			769: {
	// 				slidesPerView: 3,
	// 			},
	// 			577: {
	// 				slidesPerView: 2,
	// 			},
	// 			361: {
	// 				slidesPerView: 1.8,
	// 			},
	// 			320: {
	// 				slidesPerView: 1.2,
	// 			},
	// 		},
	// 		navigation: {
	// 			nextEl: `.certificate__arrow-next`,
	// 			prevEl: `.certificate__arrow-prev`,
	// 		},
	// 	})
	// }

	// const slidersSwipers = []
	// const sliderSwiper = document.querySelectorAll('.slider__swiper')
	// sliderSwiper?.forEach((swiper, index) => {
	// 	slidersSwipers.push(setSlidersSwiper(index + 1))
	// })
	// function setSlidersSwiper(index) {
	// 	return new Swiper(`.slider__swiper--${index}`, {
	// 		navigation: {
	// 			prevEl: `.slider__arrow-prev--${index}`,
	// 			nextEl: `.slider__arrow-next--${index}`,
	// 		},
	// 		breakpoints: {
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 32,
	// 			},
	// 			768: {
	// 				slidesPerView: 2.1,
	// 				spaceBetween: 24,
	// 			},
	// 			576: {
	// 				slidesPerView: 1.6,
	// 				spaceBetween: 16,
	// 			},
	// 			414: {
	// 				slidesPerView: 1.5,
	// 				spaceBetween: 12,
	// 			},
	// 			320: {
	// 				slidesPerView: 1.1,
	// 				spaceBetween: 12,
	// 			},
	// 		},
	// 	})
	// }
})
// $(document).ready(function () {})
// $('.catalog__sorting').select2({
//   dropdownParent: $('.catalog__sort-select'),
//   // placeholder: 'Выберите из списка',
// })

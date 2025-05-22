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

	// объединить блоки в секции от h2 до h2
	const wysiwygContainer = document.querySelector('.content-block.wysiwyg-container')
	const allContent = wysiwygContainer.childNodes
	const contentBlocks = []
	let currentBlock = []
	if (wysiwygContainer) {
		allContent.forEach(node => {
			if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'H2') {
				if (currentBlock.length > 0) {
					const section = document.createElement('section')
					currentBlock.forEach(innerNode => section.appendChild(innerNode.cloneNode(true)))
					contentBlocks.push(section)
					currentBlock = []
				}
			}
			currentBlock.push(node.cloneNode(true))
		})
		if (currentBlock.length > 0) {
			const section = document.createElement('section')
			currentBlock.forEach(innerNode => section.appendChild(innerNode.cloneNode(true)))
			contentBlocks.push(section)
		}
		wysiwygContainer.innerHTML = ''
		contentBlocks.forEach(section => wysiwygContainer.appendChild(section))
	}

	// показать следующие 10 элементов
	const aff = document.querySelectorAll('.aff')

	if (aff) {
		aff.forEach(elem => {
			const affRow = elem.querySelectorAll('.aff__body-row')
			const showMoreButton = elem.querySelector('.btn--showMore')

			let currentIndex = 0
			const cardsToShow = 10

			function showNextCards() {
				affRow.forEach((row, i) => {
					if (i >= currentIndex && i < currentIndex + cardsToShow) {
						if (innerWidth > 1280) {
							row.style.display = 'grid'

							if (elem.parentNode.classList.contains('swiper-slide')) {
								row.style.display = 'flex'
							}
						} else {
							row.style.display = 'flex'
						}
					}
				})
				currentIndex += cardsToShow
			}

			affRow.forEach(row => {
				row.style.display = 'none'
			})

			showNextCards()

			showMoreButton?.addEventListener('click', function () {
				showNextCards()

				if (currentIndex >= affRow.length) {
					showMoreButton.style.display = 'none'
				}
			})
		})
	}

	function handleTabClick(tabs, pages, activeTabClass, activePageClass, opacityPageClass) {
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

	handleTabClick(tabs, pages, 'tab__target--active', 'tab__info--active', 'tab__info--opacity')

	// accordion
	function handleAccordion(accordionElements, activeClass, contentClass) {
		accordionElements.forEach(acc => {
			if (acc.classList.contains(activeClass)) {
				const content = acc.querySelector(contentClass)
				if (content) {
					content.style.maxHeight = content.scrollHeight + 'px'
				}
			}
		})

		accordionElements.forEach(acc => {
			acc.addEventListener('click', function (e) {
				if (e.target.closest(contentClass)) {
					return
				}

				const content = this.querySelector(contentClass)
				if (!content) return

				if (!this.classList.contains(activeClass)) {
					this.classList.add(activeClass)
					content.style.maxHeight = content.scrollHeight + 'px'
				} else {
					this.classList.remove(activeClass)
					content.style.maxHeight = '0'
				}
			})
		})
	}

	if (accordion) {
		handleAccordion(accordion, 'accordion--active', '.accordion__content')
	}

	// accordionIndex
	function initAccordion() {
		const accordionIndexes = document.querySelectorAll('.accordionIndex')
		const accordionIndexContents = document.querySelectorAll('.accordionIndex-content')

		accordionIndexes.forEach((accordion, index) => {
			const content = accordionIndexContents[index]

			if (accordion.classList.contains('accordionIndex--active')) {
				content.style.maxHeight = content.scrollHeight + 'px'
			} else {
				content.style.maxHeight = '0'
			}

			accordion.addEventListener('click', e => {
				e.preventDefault()
				accordion.classList.toggle('accordionIndex--active')
				if (accordion.classList.contains('accordionIndex--active')) {
					content.style.maxHeight = content.scrollHeight + 'px'
				} else {
					content.style.maxHeight = '0'
				}
			})
		})
	}
	initAccordion()

	// accordion nextElementSibling
	function handleNextAccordion(accordionElements, activeClass) {
		accordionElements.forEach(acc => {
			if (acc.classList.contains('accordionNext--active')) {
				const content = acc.nextElementSibling

				if (content) {
					acc.classList.add(activeClass)
					content.style.maxHeight = content.scrollHeight + 'px'
				}
			}

			acc.addEventListener('click', function () {
				const content = this.nextElementSibling
				if (!content) return

				if (!this.classList.contains(activeClass)) {
					this.classList.add(activeClass)
					content.style.maxHeight = content.scrollHeight + 'px'
				} else {
					this.classList.remove(activeClass)
					content.style.maxHeight = '0'
				}
			})
		})
	}
	if (accordionNext) {
		handleNextAccordion(accordionNext, 'accordionNext--active')
	}

	// previousElementSibling
	function handlePrevAccordion(accordionElements, activeClass) {
		accordionElements.forEach(acc => {
			if (acc.classList.contains('accordionPrev--active')) {
				const content = acc.previousElementSibling
				if (content) {
					acc.classList.add(activeClass)
					content.style.maxHeight = content.scrollHeight + 'px'
				}
			}

			acc.addEventListener('click', function () {
				const content = this.previousElementSibling
				if (!content) return

				const textElement = this.querySelector('[data-firstWord]')
				if (textElement) {
					const firstWord = textElement.getAttribute('data-firstWord') || textElement.textContent
					const lastWord = textElement.getAttribute('data-lastWord') || textElement.textContent

					const currentText = textElement.textContent.trim()
					textElement.textContent = currentText === firstWord.trim() ? lastWord : firstWord
				}

				if (!this.classList.contains(activeClass)) {
					this.classList.add(activeClass)
					content.style.maxHeight = content.scrollHeight + 'px'
				} else {
					this.classList.remove(activeClass)
					content.style.maxHeight = '0'
				}
			})
		})
	}
	if (accordionPrev) {
		handlePrevAccordion(accordionPrev, 'accordionPrev--active')
	}

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
			const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset // Рассчитываем позицию для прокрутки
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

	// загрузка скриптов при первом взаимодействии
	// let isLoaded = false
	// function loadCSS(url) {
	// 	var link = document.createElement('link')
	// 	link.rel = 'stylesheet'
	// 	link.href = url
	// 	document.head.appendChild(link)
	// }

	// function loadJS(url, callback) {
	// 	var script = document.createElement('script')
	// 	script.src = url
	// 	script.defer = true
	// 	script.onload = callback
	// 	script.onerror = function () {
	// 		console.error(`Failed to load script: ${url}`)
	// 	}
	// 	document.body.appendChild(script)
	// }

	// loadCSS('https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css')
	// loadCSS('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css')

	// function handleFirstInteraction() {
	// 	if (isLoaded) return
	// 	isLoaded = true

	// 	loadJS('https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js', function () {
	// 		if (typeof Fancybox !== 'undefined') {
	// 			Fancybox.bind('[data-fancybox]', {
	// 				Hash: false,
	// 			})
	// 		}
	// 	})

	// 	loadJS('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', function () {
	// 		if (typeof Swiper !== 'undefined') {
	// 			if (document.querySelector('.brand__swiper')) {
	// 				new Swiper('.brand__swiper', {
	// 					slidesPerView: 1,
	// 					spaceBetween: 10,
	// 					navigation: {
	// 						nextEl: `.brand__arrow-next`,
	// 						prevEl: `.brand__arrow-prev`,
	// 					},
	// 				})
	// 			}
	// 		}
	// 	})

	// document.removeEventListener('click', handleFirstInteraction)
	// document.removeEventListener('scroll', handleFirstInteraction)
	// document.removeEventListener('keydown', handleFirstInteraction)
	// document.removeEventListener('touchstart', handleFirstInteraction)
	// document.removeEventListener('mousemove', handleFirstInteraction)
	// }

	// document.addEventListener('click', handleFirstInteraction)
	// document.addEventListener('scroll', handleFirstInteraction)
	// document.addEventListener('keydown', handleFirstInteraction)
	// document.addEventListener('touchstart', handleFirstInteraction)
	// document.addEventListener('mousemove', handleFirstInteraction)
})
// $(document).ready(function () {})
// $('.catalog__sorting').select2({
//   dropdownParent: $('.catalog__sort-select'),
//   // placeholder: 'Выберите из списка',
// })

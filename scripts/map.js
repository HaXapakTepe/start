if (document.querySelector('#mapYandex')) {
    const map = document.querySelector('.map')
    const points = [
        {
            text: '+7 (812) 223-51-27',
            address: '191014, Санкт-Петербург, улица Рылеева, дом 1',
            schedule:
                'Понедельник-пятница с 10:00 до 20:00, <br> Суббота с 11:00 до 19:00, <br> Воскресенье с 11:00 до 19:00',
            coords: [59.92617, 30.286161],
            name: 'Улица 1',
            iconImageHref: '../assets/images/map/1.svg',
        },
        {
            text: '+7 (812) 223-51-27',
            address: '191014, Санкт-Петербург, улица Рылеева, дом 1',
            schedule:
                'Понедельник-пятница с 10:00 до 20:00, <br> Суббота с 11:00 до 19:00, <br> Воскресенье с 11:00 до 19:00',
            coords: [59.942412, 30.351055],
            name: 'Улица 2',
            iconImageHref: '../assets/images/map/2.svg',
        },
        {
            text: '+7 (812) 223-51-27',
            address: '191014, Санкт-Петербург, улица Рылеева, дом 1',
            schedule:
                'Понедельник-пятница с 10:00 до 20:00, <br> Суббота с 11:00 до 19:00, <br> Воскресенье с 11:00 до 19:00',
            coords: [59.947243, 30.378472],
            name: 'Улица 3',
            iconImageHref: '../assets/images/map/3.svg',
        },
    ]

    ymaps.ready(init)

    function init() {
        const myMap = new ymaps.Map('mapYandex', {
            center: [59.942412, 30.351055],
            zoom: 12,
        })

        const myCollection = new ymaps.GeoObjectCollection()

        points.forEach(point => {
            const content = `
                  <div class="map__ballon">
                      <div class="map__ballon-box">
                          <p class="map__ballon-title">Телефон</p>
                          <p class="map__ballon-text">
                              <a href="tel:${point.text}">${point.text}</a>
                          </p>
                      </div>
                      <div class="map__ballon-box">
                          <p class="map__ballon-title">Адрес</p>
                          <p class="map__ballon-text">${point.address}</p>
                      </div>
                      <div class="map__ballon-box">
                          <p class="map__ballon-title">График работы</p>
                          <p class="map__ballon-text">${point.schedule}</p>
                      </div>
                  </div>
                  `

            const myPlacemark = new ymaps.Placemark(
                point.coords,
                {
                    balloonContent: content,
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: point.iconImageHref,
                    iconImageSize: [247, 30],
                }
            )
            myCollection.add(myPlacemark)
        })

        myMap.geoObjects.add(myCollection)
    }
}
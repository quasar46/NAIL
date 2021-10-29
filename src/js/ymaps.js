ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [51.723762, 36.138110],
        zoom: 12,
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([51.723762, 36.138110], {
            balloonContent: 'Пр-кт В. Клыкова, д. 16'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/bool.png',
            iconImageSize: [52, 52],
            iconImageOffset: [-5, -38]
        }))

        .add(new ymaps.Placemark([51.751269, 36.192350], {
            balloonContent: 'Карла Маркса 17, дом быта, 2 этаж, лестница слева рядом ремонт часов.',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/bool.png',
            iconImageSize: [52, 52],
            iconImageOffset: [-5, -38]
        }));
}
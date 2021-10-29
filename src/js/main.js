document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector('body');
    const burger = document.querySelector('#burger');
    const burgerMenu = document.querySelector('.burger-menu');
    const menuClose = document.querySelector('.burger-menu__close');
    const header = document.querySelector('header');
    const search = document.querySelector('.header__search');
    const heightHeader = header.offsetHeight;
    const heightSearch = search.offsetHeight;
    const catalogTitle = document.querySelector('.main-catalog__title');
    // const heightCatalogTitle = catalogTitle.offsetHeight;
    const cards = document.querySelectorAll('.card-catalog__wrapper');
    const catalogAside = document.querySelector('.catalog-aside');
    const catalogItems = document.querySelectorAll('.catalog-aside__item');
    const catalogItemsLink = document.querySelectorAll('.catalog-aside__item a');
    const openFilter = document.querySelector('#openFilter');
    const closeFilterBtn = document.querySelector('#closeFilter');
    const closeFilters = document.querySelectorAll('.top-filter__close');
    const resetFilter = document.querySelector('#reset');
    // const btnShowMore = document.querySelector('.main-catalog__button ');
    const divOverlay = document.createElement('div');
    const writeUs = document.querySelectorAll('.writeBtn');
    const feedback = document.querySelector('#modal-feedback ');
    const parentAsideFilter = document.querySelector('.main-catalog__wrapper');
    const modalClose = document.querySelectorAll('.modal__closed ');
    const overlays = document.querySelectorAll('.overlay');
    const btnsToggle = document.querySelectorAll('.btn-toggle');
    const btnsForgotPass = document.querySelector('.forgotPassword');
    const modalRecovery = document.querySelector('#modal-recovery');
    const ordersShow = document.querySelectorAll('.orderShow');
    const cabinetOrders = document.querySelectorAll('.cabinet-order__content');
    // const reviewItems = document.querySelectorAll('.reviews-item');
    const itemsHidden = document.querySelectorAll('.itemHidden');
    const showMore = document.querySelector('#showMore');
    const shopCheck = document.querySelector('#shopCheck');
    const deliveryCheck = document.querySelector('#deliveryCheck');
    const shopContent = document.querySelector('.basket-description__shop');
    const deliveryContent = document.querySelector('.basket-description__delivery');
    const stars = document.querySelectorAll('.card-aside__stars svg');
    const sendFeedback = document.querySelector('#sendFeedback');
    const modalReview = document.querySelector('#modal-review');
    const descBtnsNext = document.querySelectorAll('.description-item__button--next');
    const descBtnsPrev = document.querySelectorAll('.description-item__button--prev');
    const modalOrder = document.querySelector('#modal-order');
    const showModalOrder = document.querySelector('#showModalOrder');

    // закрывает модальное окно
    if (modalClose.length > 0) {
        modalClose.forEach(item => {
            item.addEventListener('click', function () {
                overlays.forEach(item => {
                    item.classList.remove('current');
                    body.style.overflow = "";
                });
            });
        });
    }

    // открывает модалку напишите нам
    if (writeUs.length > 0) {
        writeUs.forEach(item => {
            item.addEventListener('click', function () {
                feedback.classList.toggle('current');
                bodyHidden()
            });
        });
    }

    function bodyHidden() {
        body.style.overflow = "hidden";
    }

    // при открытии бургер меню для body overflow hidden
    burger.addEventListener('click', function () {
        bodyHidden();
        calcMargin();
        burgerMenu.classList.add('current');
    })

    // открывает подменю в бургер меню
    burgerMenu.addEventListener('click', function (event) {
        if (event.target.classList.contains('menu-sublist-open')) {
            event.target.nextSibling.classList.toggle('active');
        }
    });

    // закрывает бургер меню
    menuClose.addEventListener('click', function () {
        burgerMenu.classList.remove('current');
        body.style.overflow = "";
    });

    // выставляет отступ сверху для бургер меню равный шапке
    function calcMargin() {
        if (window.innerWidth < 767) {
            burgerMenu.style.top = heightHeader - heightSearch + 'px';
        }
    }

    // отмечает избранное в карточках
    if (cards.length > 0) {
        cards.forEach(item => {
            item.addEventListener('click', function (event) {
                if (event.target.classList.contains('card-catalog__favorite')) {
                    event.preventDefault();
                    console.log('1');
                    event.target.classList.toggle('active');
                }
            });
        });
    }

    // открывает подменю в фильтре
    if (catalogAside) {
        catalogAside.addEventListener('click', function (event) {
            if (event.target.classList.contains('catalog-aside__item') && event.target.nextSibling) {
                event.target.classList.toggle('active');
                event.target.nextSibling.classList.toggle('active');
            }
        });
    }

    catalogItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.stopPropagation();
            item.classList.toggle('active');
            if (item.nextSibling.nextSibling) {
                item.nextSibling.nextSibling.classList.toggle('active');
            }
        });
    });

    // открывает фильтр
    if (openFilter) {
        openFilter.addEventListener('click', function () {
            catalogAside.classList.add('active');
            bodyHidden();
            divOverlay.classList.add('active');

        });
    }

    // закрывает фильтр
    if (closeFilterBtn) {
        closeFilterBtn.addEventListener('click', function () {
            catalogAside.classList.remove('active');
            body.style.overflow = "";
            divOverlay.classList.remove('active');
        });
    }

    // закрывает фильтр-ссылки
    closeFilters.forEach(item => {
        item.addEventListener('click', function () {
            item.closest('.top-filter__item').style.display = "none";
        });
    })

    // удаляет класс актив на всех ссылках фильтра
    if (resetFilter) {
        resetFilter.addEventListener('click', function () {
            catalogItemsLink.forEach(item => {
                item.classList.remove('active');
            });
        });
    }

    if (parentAsideFilter) {
        if (window.innerWidth < 1920) {

            divOverlay.classList.add('overlay');
            parentAsideFilter.appendChild(divOverlay);
        }
    }

    // const cards = document.querySelectorAll('.card-catalog__wrapper');

    // if (btnShowMore) {
    //     btnShowMore.addEventListener('click', function () {
    //         cards.forEach(item => {
    //             item.classList.remove('hidden');
    //         });
    //     });
    // }

    btnsToggle.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.toggle('active');
            item.nextSibling.classList.toggle('active');
        });
    });

    if (btnsForgotPass) {
        btnsForgotPass.forEach(item => {
            item.addEventListener('click', function (event) {
                event.preventDefault();
                overlays.forEach(item => {
                    item.classList.remove('current');
                    modalRecovery.classList.add('current');
                });
            });
        });
    }

    ordersShow.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.toggle('current');
            item.parentNode.parentNode.nextElementSibling.classList.toggle('active');
            if (item.classList.contains('current')) {
                item.innerHTML = 'Подробнее';
            } else {
                item.innerHTML = 'Скрыть';
            };
        });
    });

    if (sendFeedback) {
        sendFeedback.addEventListener('click', function () {
            modalReview.classList.add('current');
        });
    }

    if (itemsHidden.length > 0) {
        showMore.addEventListener('click', function (event) {
            if (itemsHidden.length > 1) {
                event.preventDefault();

                itemsHidden.forEach(item => {
                    if (item.classList.contains('hidden')) {
                        item.classList.remove('hidden');
                        item.classList.add('active');
                        showMore.innerHTML = 'Скрыть';
                    } else if (item.classList.contains('active')) {
                        item.classList.remove('active');
                        item.classList.add('hidden');
                        showMore.innerHTML = 'Показать';
                    }
                })
            }
        });
    }



    if (deliveryCheck) {
        deliveryCheck.addEventListener('click', function () {
            deliveryContent.style.display = "block";
            shopContent.style.display = "none";
        });
    }

    if (shopCheck) {
        shopCheck.addEventListener('click', function () {
            deliveryContent.style.display = "none";
            shopContent.style.display = "block";
        });
    }

    if (stars) {
        stars.forEach(item => {
            item.addEventListener('click', function () {
                item.classList.toggle('active');
            });
        });
    }



    const inputs = document.querySelectorAll('.brif__input');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.modal__attach-text').innerText;

        input.addEventListener('change', function (e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.querySelector('.modal__attach-text').innerText = 'Выбрано файлов: ' + countFiles;
            else
                label.querySelector('.modal__attach-text').innerText = labelVal;
        });
    });

    if (descBtnsNext) {
        descBtnsNext.forEach(item => {
            item.addEventListener('click', function (event) {
                event.preventDefault();
                item.closest('.description-item').nextElementSibling.classList.add('active');
                if (item.closest('.description-item__main')) {
                    // item.closest('.description-item__main').classList.add('mode');
                    item.closest('.description-item__main').style.paddingBottom = "0";
                }
                item.closest('.description-item').nextElementSibling.querySelector('.description-item__content').classList.remove('hidden');
                item.closest('.description-item__content').classList.add('hidden');
            });
        });
    }

    if (descBtnsPrev) {
        descBtnsPrev.forEach(item => {
            item.addEventListener('click', function (event) {
                event.preventDefault();
                item.closest('.description-item').previousElementSibling.querySelector('.description-item__content').classList.remove('hidden');
                if (item.closest('.description-item').previousElementSibling.classList.contains('description-item__main')) {
                    // item.closest('.description-item').previousElementSibling.classList.remove('mode');
                    item.closest('.description-item').previousElementSibling.style.paddingBottom = "60px";
                }
                item.closest('.description-item__content').classList.add('hidden');
            });
        });
    }

    if (showModalOrder) {
        showModalOrder.addEventListener('click', function (event) {
            event.preventDefault();
            modalOrder.classList.add('current');
            setTimeout(function () {
                modalOrder.classList.remove('current');
            }, 4000);
        });
    }
})

$(document).ready(function () {
    $('.hero__slick').slick({
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear',
        // autoplay: true,
        // autoplaySpeed: 2000,
    });

    $('.catalog__slick').slick({
        dots: true,
        slidesToShow: 6,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1919,
                settings: {
                    // slidesToShow: 4,
                    arrows: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ]
    });

    $('.catalog__slick-mode').slick({
        dots: true,
        mobileFirst: true,
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 768,
            settings: 'unslick',
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 0,
            settings: {
                slidesToShow: 2,
            }
        }]
    })

    $('.brends__slick').slick({
        slidesToShow: 6,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1919,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            }
        }]
    })

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                vertical: false,
            }
        }]
    });

    $('#select').styler();
});
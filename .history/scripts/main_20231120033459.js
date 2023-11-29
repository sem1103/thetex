
let slider1, slider2;
const sliderConfig = {
    center: true,
    items: 4,
    loop: true,
    margin: 10,
    mouseDrag: false,
    touchDrag: false,
    dotsEach: true
};
const servicesSliderConfig = {
    items: 4,
    mouseDrag: false,
    touchDrag: false,
    margin: 30,
    responsiveBaseElement: 'body',
    responsive: {
        0: {
            items: 1
        },
        420: {
            items: 2
        },
        768: {
            items: 4
        },
        1200: {
            items: 4
        }
    }

}



let mainMenu = Array.from(document.querySelectorAll('.nav__right > ul > li'));
let introIndex = 0;
//let introTime = setInterval(() => introSlider(0), 5000);
let subMobMenuBtn = document.querySelectorAll('.mobile__menu nav span');
let mobMenu = document.querySelectorAll('.mobile__menu nav > ul > li');

let descMenu = document.querySelectorAll('.desc__menu > nav > ul > li a');
let subMenu = document.querySelectorAll('.desc__submenu ul ');
let lines = document.querySelectorAll('.line');
let subMenuId = '';



subMobMenuBtn.forEach((item, index) => {
    item.onclick = (e) => {
        document.getElementsByClassName('main__header')[0].classList.toggle('submenu__active');
        mobMenu.forEach(elem => {
            elem.classList.remove('mobMenuHide');
            elem.classList.add('mobMenuHide');
            elem.classList.remove('mobMenuShow');
        });
        mobMenu[index].classList.remove('mobMenuHide');
        mobMenu[index].classList.add('mobMenuShow')
        console.log(e);
    }
})

descMenu.forEach((item, index) => {
    item.onmouseenter = () => {
        descMenu.forEach(elem => {
            elem.classList.remove('active__menu');
        })
        lines.forEach(elem => elem.classList.remove('active__line'));
        subMenu.forEach(elem => {
            if (elem.getAttribute('data-id') == item.getAttribute('data-id')) {
                subMenu.forEach(el => {
                    el.classList.remove('active__submenu');
                    el.classList.remove('hide__submenu');
                })
                elem.classList.add('active__submenu');
                subMenuId = elem.getAttribute('data-id');
            } else elem.classList.add('hide__submenu')
        })
        if (item.getAttribute('data-id') != subMenuId) return;

        lines[index].classList.add('active__line');
    }
});

function descBurgerHundler() {
    document.getElementById('header__wrapper').classList.toggle('desc__burger__active');
}
function searhModalHandler() {
    document.getElementsByClassName('search__wrapper')[0].classList.toggle('search__active');
}

function mobileMenuHandler() {
    document.getElementsByClassName('mobile__menu')[0].classList.toggle('mobile__menu__active');
    document.getElementsByClassName('main__header')[0].classList.toggle('mobile__menu__active');
    document.getElementsByClassName('main__header')[0].classList.remove('submenu__active');

    mobMenu.forEach(elem => {
        elem.classList = '';
    });
}

function closeSubMenu() {
    mobMenu.forEach(item => item.className = '');
    document.getElementsByClassName('main__header')[0].classList.toggle('submenu__active');
}


function introSlider(numb) {
    // clearInterval(introTime)

    let item = Array.from(document.getElementsByClassName('slider__item'));

    let firstItem = item[0];
    let length = document.getElementsByClassName('slider__item').length;
    let headerWrapper = document.getElementById('header__wrapper');
    let dots = Array.from(document.getElementsByClassName('dot'));
    dots.forEach(elem => elem.classList.remove('active__dot'));
    introIndex += numb == -1 ? numb : 1;

    if (numb >= 1) {
        introIndex = numb - 1;
    }
    if (introIndex == length) {
        introIndex = 0;
    } else if (introIndex < 0) {
        introIndex = length - 1;
    }


    firstItem.style.marginLeft = -100 * introIndex + '%';
    headerWrapper.style.backgroundImage = `url(../img/intro-bg${introIndex + 1}.webp)`;
    dots[introIndex].classList.add('active__dot');


    // introTime = setInterval(() => introSlider(0), 5000);
}




$(document).ready(function () {
    slider1 = $("#slide1").owlCarousel({
        ...sliderConfig,
        items: 7,
        responsiveBaseElement: 'body',
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 5
            },
            1200: {
                items: 7
            },
            1920: {
                items: 7
            }

        }
    });
    slider2 = $("#slide2").owlCarousel({
        ...sliderConfig,
        items: 1,
    });

    $('.inform__slider').owlCarousel({
        items: 4,
        margin: 30,
        loop: true,
        dotsEach: true,
        responsiveBaseElement: 'body',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })

    $('.numbers__slider').owlCarousel({
        items: 4,
        margin: 30,
        loop: true,
        dotsEach: true,
        responsiveBaseElement: 'body',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });



    // $('#slide2').on('click', '.owl-dot', (e) => {
    //     let index = $(e.currentTarget).index();
    //     slider1.trigger('to.owl.carousel', [index, 300, true])
    // });

    $('.news__items').owlCarousel(servicesSliderConfig);
    $('.message__items').owlCarousel({
        ...servicesSliderConfig,
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    })
})


function nextSlide(numb) {
    const slide1 = $('#slide1').data('owl.carousel');
    const slide2 = $('#slide2').data('owl.carousel');
    if (numb) {
        slide1.next();
        slide2.next();
    }
    else {
        slide1.prev();
        slide2.prev();
    }
}



document.addEventListener('DOMContentLoaded', ()=>{
    let sections = document.querySelectorAll('main > section');
    let images = document.querySelectorAll('img');
    let headerWrapper = document.getElementById('header__wrapper');
    headerWrapper.style.backgroundImage = 'url(../img/intro-bg1.webp)';

    let links = [
        'style/reset.css',
        'style/main.css',
        'dist/assets/owl.carousel.css',
        'dist/assets/owl.theme.default.css',
        'style/mob320-style.css'
    ];

    links.forEach((item, index) => {
        let link = document.createElement('link');
        link.href = item;
        link.rel = 'stylesheet';
        if(index == links.length - 1) link.media = '(max-width: 480px)';
        document.head.appendChild('link');
    })

    headerWrapper.classList.remove('loading');
    
    const observer = new IntersectionObserver(elem => {
        elem.forEach(item =>{
            if(item.isIntersecting) {
                item.target.classList.add('visible__content');
            }
        })
    }, {threshold: 0.2});
    
    let imgAbserver = new IntersectionObserver(item => {
        item.forEach(elem => {
            if(elem.isIntersecting) {
                let src = elem.target.getAttribute('data-src');
               
                elem.target.setAttribute('src',src);    

            }
        })
    }, {threshold: 0.2});



    sections.forEach(item =>{
        item.classList.add('visible__none');
        observer.observe(item)
    })
    images.forEach(item =>{
        imgAbserver.observe(item);
        item.setAttribute('decoding', 'async')
    })



})






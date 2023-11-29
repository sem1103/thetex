
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

let introIndex = 0;
//let introTime = setInterval(() => introSlider(0), 5000);





function introSlider(numb) {
    // clearInterval(introTime)

    let item = Array.from(document.getElementsByClassName('slider__item'));

    let firstItem = item[0];
    let length = document.getElementsByClassName('slider__item').length;
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
    dots[introIndex].classList.add('active__dot');


    // introTime = setInterval(() => introSlider(0), 5000);
}

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
    slider1 = $("#slide1").owlCarousel({
        ...sliderConfig,
        items: 7,
        autoWidth: true,
        responsiveBaseElement: 'body',
        margin: 10,
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
        loop:true,  
        dotsEach: true,
        responsiveBaseElement: 'body',
        responsive: {
            0: {
                items: 1,
                margin:0
            },
            768: {
                items: 3,
                margin:20
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
    














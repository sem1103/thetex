let index = 0;
function changeSlide(newxPrev){
    let photoItems = document.querySelectorAll('.slider__nav img');
    let mainSlide = document.querySelector('.gallerySlider__display img');

    
    console.log(photoItems[index - newxPrev].getAttribute('src'));
    console.log(mainSlide);

}
let index = 0;
function changeSlide(newxPrev){
    let photoItems = document.querySelectorAll('.slider__nav img');
    let mainSlide = document.querySelector('.gallerySlider__display img');

    mainSlide.src = photoItems[index - newxPrev].src
    console.log(photoItems);
    console.log(mainSlide);

}
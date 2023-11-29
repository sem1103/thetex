let index = 0;
function changeSlide(newxPrev){
    let photoItems = document.querySelectorAll('.slider__nav img');
    let mainSlide = document.querySelector('.gallerySlider__display img');
    index += newxPrev

    index = index < 0 ? photoItems.length - 1 : index >= photoItems.length - 1 ? 0 : index;
   
    mainSlide.src = photoItems[index].src;
    photoItems[index].style.opacity = '.5'
  
}
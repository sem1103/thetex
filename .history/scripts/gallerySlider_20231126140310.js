let index = 0;
function changeSlide(newxPrev){
    let photoItems = document.querySelectorAll('.slider__nav img');
    let mainSlide = document.querySelector('.gallerySlider__display img');
    photoItems.forEach(item => item.classList = '')
    index += newxPrev;

    index = index < 0 ? photoItems.length - 1 : index > photoItems.length - 1 ? 0 : index;
   console.log(index);
    mainSlide.src = photoItems[index].src;
    photoItems[index].classList.add('active__slide');
  
}
let index = 0;
function changeSlide(newxPrev){
    let photoItems = document.querySelectorAll('.slider__nav img');
    let mainSlide = document.querySelector('.gallerySlider__display img');
    photoItems.forEach(item => item.classList = '')
    index += newxPrev;

    index = index < 0 ? photoItems.length - 1 : index > photoItems.length - 1 ? 0 : index;
 
    console.log(mainSlide.getAttribute('src').split(/));
    photoItems[index].classList.add('active__slide');
  
}
let index = 0;
function changeSlide(newxPrev){
    let photoItems = document.querySelectorAll('.slider__nav img');
    let mainSlide = document.querySelector('.gallerySlider__display img');
    if(index < 0 || index > photoItems.length ){
        index = 0;
    } else index++;
    console.log(index);
    mainSlide.src = photoItems[index].src;
  
}
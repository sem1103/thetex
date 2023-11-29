let index = 0;
function changeSlide(newxPrev){
    let photoItems = document.querySelectorAll('.slider__nav img');
    let mainSlide = document.querySelector('.gallerySlider__display img');
    let count = document.querySelector('.slider__count');
    photoItems.forEach(item => item.classList = '')
    index += newxPrev;
    if(newxPrev < 0){
        index--;
    }else if(!newxPrev){
        index++;
    }else if(newxPrev){
        index = newxPrev;
    }

    index = index < 0 ? photoItems.length - 1 : index > photoItems.length - 1 ? 0 : index;
    
    mainSlide.src = `${mainSlide.getAttribute('src').split('/').slice(0,2).join('/')}/photo${index + 1}.png`;

    photoItems[index].classList.add('active__slide');
    count.innerText = `${index + 1}/${photoItems.length}`
  
}
document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('main > section');
    let images = document.querySelectorAll('img');
    let headerWrapper = document.getElementById('header__wrapper');
    headerWrapper.classList.remove('loading');

    const observer = new IntersectionObserver(elem => {
        elem.forEach(item => {
            if (item.isIntersecting) {
                item.target.classList.add('visible__content');
            }
        })
    }, { threshold: 0.2 });

    let imgAbserver = new IntersectionObserver(item => {
        item.forEach(elem => {
            if (elem.isIntersecting) {
                let src = elem.target.getAttribute('data-src');

                elem.target.setAttribute('src', src);

            }
        })
    }, { threshold: 0.2 });


    sections.forEach(item => {
        item.classList.add('visible__none');
        observer.observe(item)
    })
    images.forEach(item => {
        imgAbserver.observe(item);
        item.setAttribute('decoding', 'async');
    })

    let distContainer = document.getElementById('dist');
const distRequest = new XMLHttpRequest();

distRequest.open('GET', 'about-district.html', true);
distRequest.onload = ()=> {
    let tempDiv = document.createElement('div')
    tempDiv.innerHTML = distRequest.responseText
    distContainer.innerHTML = tempDiv.getElementsByTagName('body')[0].children;
    console.log(tempDiv);
}
distRequest.send();

})



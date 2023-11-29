document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('main > section');
    
    let headerWrapper = document.getElementById('header__wrapper');
    headerWrapper.classList.remove('loading');

    const observer = new IntersectionObserver(elem => {
        elem.forEach(item => {
            if (item.isIntersecting) {
                item.target.classList.add('visible__content');
            }
        })
    }, { threshold: 0.1 });

    sections.forEach(item => {
        item.classList.add('visible__none');
        observer.observe(item)
    })
    
    let images = document.querySelectorAll('img');
    let imgAbserver = new IntersectionObserver(item => {
        item.forEach(elem => {
            if (elem.isIntersecting) {
                let src = elem.target.getAttribute('data-src');
                elem.target.setAttribute('src', src);

            }
        })
    }, { threshold: 0.1 });

    images.forEach(item => {
        imgAbserver.observe(item);
        item.setAttribute('decoding', 'async');
    })
})



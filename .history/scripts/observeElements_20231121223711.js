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
    

})



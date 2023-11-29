document.addEventListener('DOMContentLoaded', ()=>{
    let headerContaier = document.getElementById('header__content');
    let headerRequest = new XMLHttpRequest();
    

    headerRequest.open('GET', 'components/Header/header.html');
    headerRequest.onload = ()=>{
        let divTemp = document.createElement('div');
        divTemp.innerHTML = headerRequest.responseText;
        headerContaier.append(...divTemp.querySelector('#header__content').children);

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
    }
    headerRequest.send();
})


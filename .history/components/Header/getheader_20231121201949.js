document.addEventListener('DOMContentLoaded', ()=>{
    let headerContaier = document.getElementById('header__content');
    let headerRequest = new XMLHttpRequest();
    

    headerRequest.open('GET', 'components/Header/header.html', true);
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
        let subMobMenuBtn = document.querySelectorAll('.mobile__menu nav span');
        let mobMenu = document.querySelectorAll('.mobile__menu nav > ul > li');

        subMobMenuBtn.forEach((item, index) => {
            item.onclick = (e) => {
                document.getElementsByClassName('main__header')[0].classList.toggle('submenu__active');
                mobMenu.forEach(elem => {
                    elem.classList.remove('mobMenuHide');
                    elem.classList.add('mobMenuHide');
                    elem.classList.remove('mobMenuShow');
                });
                mobMenu[index].classList.remove('mobMenuHide');
                mobMenu[index].classList.add('mobMenuShow')
            }
        })
    }
    headerRequest.send();
})

function mobileMenuHandler() {
    document.getElementsByClassName('mobile__menu')[0].classList.toggle('mobile__menu__active');
    document.getElementsByClassName('main__header')[0].classList.toggle('mobile__menu__active');
    document.getElementsByClassName('main__header')[0].classList.remove('submenu__active');

    mobMenu.forEach(elem => {
        elem.classList = '';
    });
}

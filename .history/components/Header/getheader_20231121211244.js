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

        let subMenu = document.querySelectorAll('.desc__submenu ul ');
        let lines = document.querySelectorAll('.line');
        let subMenuId = '';
        let descMenu = document.querySelectorAll('.desc__menu > nav > ul > li a');

        let subMobMenuBtn = document.querySelectorAll('.mobile__menu nav span');
        let mobMenu = document.querySelectorAll('.mobile__menu nav > ul > li');

        console.log(subMenu);

        descMenu.forEach((item, index) => {
            item.onmouseenter = () => {
                descMenu.forEach(elem => {
                    elem.classList.remove('active__menu');
                })
                lines.forEach(elem => elem.classList.remove('active__line'));
                subMenu.forEach(elem => {
                    if (elem.getAttribute('data-id') == item.getAttribute('data-id')) {
                        subMenu.forEach(el => {
                            el.classList.remove('active__submenu');
                            el.classList.remove('hide__submenu');
                        })
                        elem.classList.add('active__submenu');
                        subMenuId = elem.getAttribute('data-id');
                    } else elem.classList.add('hide__submenu')
                })
                if (item.getAttribute('data-id') != subMenuId) return;
        
                lines[index].classList.add('active__line');
            }
        });


        subMobMenuBtn.forEach((item, index) => {
            item.onclick = () => {
                document.getElementsByClassName('main__header')[0].classList.toggle('submenu__active');
                mobMenu.forEach(elem => {
                    elem.classList.remove('mobMenuHide');
                    elem.classList.add('mobMenuHide');
                    elem.classList.remove('mobMenuShow');
                });
                console.log(mobMenu);
                mobMenu[index].classList.remove('mobMenuHide');
                mobMenu[index].classList.add('mobMenuShow')
            }
        });  


      
        
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

function closeSubMenu() {
    console.log(mobMenu);
    mobMenu.forEach(item => item.className = '');
    document.getElementsByClassName('main__header')[0].classList.toggle('submenu__active');
}

function descBurgerHundler() {
    document.getElementById('header__wrapper').classList.toggle('desc__burger__active');
}
let mobMenu,subMobMenuBtn, descMenu,subMenu, lines, subMenuId , allDistrictSubmenu;
let menuDistrict = {
    aboutInform: 'Общая информация',
    history: 'История',
    tourism: 'Туризм и отдых',
    mediaDistrict: 'СМИ района',
    globalCollab: 'Международное сотрудничество',
    emergencyDef: 'Защита населения и территории от ЧС',
    staticInfo: 'Статическая информация',
    legislativeMap: 'Законодательная карта'
}


document.addEventListener('DOMContentLoaded', ()=>{

    (async function getHeader(){
        let headerContaier = document.getElementById('header__content');
        let divTemp = document.createElement('div');


        try {
            let request = await fetch('components/Header/header.html', {method: 'GET'});

            let respons = await request.text();
            divTemp.innerHTML = respons;
            headerContaier.append(...divTemp.querySelector('#header__content').children)
            
            
            imgLoading();
    
            initMenu();
            setSubMenuBtn();
            SetHoverDescSubMenu();
        } catch (error) {
            console.log('Не получилось скачать файл: ' + error);
        }
    })()    
})

//-----InitMenuElements-----
function initMenu(){
    mobMenu = document.querySelectorAll('.mobile__menu nav > ul > li');
    subMobMenuBtn = document.querySelectorAll('.mobile__menu span');

    descMenu = document.querySelectorAll('.desc__menu > nav > ul > li a');
    subMenu = document.querySelectorAll('.desc__submenu ul ');
    lines = document.querySelectorAll('.line');
    allDistrictSubmenu = document.querySelectorAll('.district');
}
//--------InitMenuElements-END-----------------



//******Desctop*****************************

//OpenCloseDescMenu
function descBurgerHundler() {
    document.getElementById('header__wrapper').classList.toggle('desc__burger__active');
};
//------OpenCloseDescMenu-END-----------



//SetHoverDescSubMenu
function SetHoverDescSubMenu(){
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
}
//------SetHoverDescSubMenu-END----------

//******************************************


//******Mobile*****************************

//OpenCloseMobMenu
function mobileMenuHandler() {
    document.getElementsByClassName('mobile__menu')[0].classList.toggle('mobile__menu__active');
    document.getElementsByClassName('main__header')[0].classList.toggle('mobile__menu__active');
    document.getElementsByClassName('main__header')[0].classList.remove('submenu__active');

    mobMenu.forEach(elem => {
        elem.classList = '';
    });

    console.log(subMobMenuBtn);
}
//------OpenCloseMobMenu-END-----------


//SetSubMenuBtn
function setSubMenuBtn(){
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
//-------SetSubMenuBtn-END--------------


//CloseSubMenu
function closeSubMenu() {
    mobMenu.forEach(item => item.className = '');
    document.getElementsByClassName('main__header')[0].classList.toggle('submenu__active');
};
//-------CloseSubMenu-END--------------


//******************************************




//******Lazy-loading*****
function imgLoading(){
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
//**********************


//SearchShowClose
export function searhModalHandler() {
    document.getElementsByClassName('search__wrapper')[0].classList.toggle('search__active');
}
//-----SearchShowClose-END------------


export default menuDistrict;
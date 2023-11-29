
let subMobMenuBtn = document.querySelectorAll('.mobile__menu nav span');
let mobMenu = document.querySelectorAll('.mobile__menu nav > ul > li');


let subMenu = document.querySelectorAll('.desc__submenu ul ');
let lines = document.querySelectorAll('.line');
let subMenuId = '';


window.onload = ()=>{
   

}





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
        console.log(e);
    }
})





function descBurgerHundler() {
    document.getElementById('header__wrapper').classList.toggle('desc__burger__active');
}

function searhModalHandler() {
    document.getElementsByClassName('search__wrapper')[0].classList.toggle('search__active');
}

function mobileMenuHandler() {
    document.getElementsByClassName('mobile__menu')[0].classList.toggle('mobile__menu__active');
    document.getElementsByClassName('main__header')[0].classList.toggle('mobile__menu__active');
    document.getElementsByClassName('main__header')[0].classList.remove('submenu__active');

    mobMenu.forEach(elem => {
        elem.classList = '';
    });
}

function closeSubMenu() {
    mobMenu.forEach(item => item.className = '');
    document.getElementsByClassName('main__header')[0].classList.toggle('submenu__active');
}

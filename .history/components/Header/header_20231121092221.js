document.addEventListener('DOMContentLoaded', ()=>{
    let headerContaier = document.getElementById('header__content');
    let headerRequest = new XMLHttpRequest();

    headerRequest.open('GET', 'components/Header/header.html');
    headerRequest.onload = ()=>{
        let divTemp = document.createElement('div');
        divTemp.innerHTML = headerRequest.responseText;
        headerContaier.append(...divTemp.querySelector('#header__content').children)
    }

    headerRequest.send();
    
    
    let subMenu = document.querySelectorAll('.desc__submenu ul ');
    let lines = document.querySelectorAll('.line');
    let subMenuId = '';
    let descMenu = document.querySelectorAll('.desc__menu > nav > ul > li a');
    
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

})


window.onload = ()=>{
   
}
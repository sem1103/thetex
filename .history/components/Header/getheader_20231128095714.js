let mobMenu,subMobMenuBtn, descMenu,subMenu, lines, subMenuId,allDistrictSubmenu, allPressCentreSubmenu, allGrovernmentSubmenu;
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

let menuPressCentre = {
    news: 'Новости',
    events: 'События',
    articles: 'Статьи',
    activity: 'Мероприятия',
    videoGallery: 'Видеогалерея',
    photoGallery: 'Фотогалерея'
}

let menuGovernment = {
    adminStructure: 'Структура администрации',
    subordinateOrganization: 'Подведомственные организации',
    headOrganization: 'Глава организации',
    employeesOrganization: 'Сотрудники организации',
    taskFunctuins: 'Полномочия задачи и функции',
    terretirualOffices: 'Территориальные органы и представительства',
    contacts: 'Контакты'
}

let publicReceptionMenu = {
    writeMessage: 'Написать обращение',
    orderTimeReception : 'Порядок и время приема',
    appealProcedure: 'Порядок обжалования',
    workingCitizensAppeal: 'Работа с обращениями граждан'
}


document.addEventListener('DOMContentLoaded', ()=>{
    (async function getHeader(){
        let headerContaier = document.getElementById('header__content');
        let divTemp = document.createElement('div');


        try {
            let request = await fetch('components/Header/header.html', {method: 'GET'});
            let districtLocation = Object.keys(menuDistrict).find(key => key == window.location.search.slice(1));
            let respons = await request.text();
            divTemp.innerHTML = respons;
            headerContaier.append(...divTemp.querySelector('#header__content').children);
    
            initMenu();
            setSubMenuBtn();
            SetHoverDescSubMenu();

            allDistrictSubmenu.forEach(item =>{
                item.onclick = (e)=>{
                    let activeContent = Object.keys(menuDistrict).find(key => menuDistrict[key] == e.target.innerHTML); 
                    window.location.href = `aboutDistrict.html?${activeContent}`;
                }
            });
            allPressCentreSubmenu.forEach(item =>{
                item.onclick = (e)=>{
                    let activeContent = Object.keys(menuPressCentre).find(key => menuPressCentre[key] == e.target.innerHTML); 
                    window.location.href = `pressCentre.html?${activeContent}`;
                }
            });
            allGrovernmentSubmenu.forEach(item =>{
                item.onclick = (e)=>{
                    let activeContent = Object.keys(menuGovernment).find(key => menuGovernment[key] == e.target.innerHTML); 
                    window.location.href = `government.html?${activeContent}`;
                }
            });

            if(districtLocation){
                import("./../../scripts/aboutDistrict.js").then(res => {
                    let aboutDistrictGetContent = res.default;
                    aboutDistrictGetContent(districtLocation);
                })
            }

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
    allDistrictSubmenu = document.querySelectorAll('.district a');
    allPressCentreSubmenu = document.querySelectorAll('.pressCentre a');
    allGrovernmentSubmenu = document.querySelectorAll('.government a');

}
//--------InitMenuElements-END-----------------



//******Desctop*****************************

//OpenCloseDescMenu
function descBurgerHundler() {
    document.getElementById('header__wrapper').classList.toggle('desc__burger__active');
};
window.descBurgerHundler = descBurgerHundler;
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

}
window.mobileMenuHandler = mobileMenuHandler;
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
window.closeSubMenu = closeSubMenu;
//-------CloseSubMenu-END--------------


//******************************************







//SearchShowClose
export function searhModalHandler() {
    document.getElementsByClassName('search__wrapper')[0].classList.toggle('search__active');
}
window.searhModalHandler = searhModalHandler;
//-----SearchShowClose-END------------


export {menuDistrict, menuPressCentre, menuGovernment};
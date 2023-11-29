import addBreadCrunps from "../scripts/addBreadCrumps.js";
import {menuDistrict} from "../components/Header/getheader.js";

let mainContent = document.querySelector('.main__content');
let mainTitle = document.querySelector('h1');


let index = 0;

let menuBtns = document.querySelectorAll('.menu ul button');
let breadCrumps = {
    index: 'Главная',
    aboutDistrict: 'О районе'
};
let crumpsContainer = document.querySelector('.bread__crumps');
addBreadCrunps(crumpsContainer,breadCrumps);

menuBtns.forEach(item =>{
    let fileName = Object.keys(menuDistrict)[index];
    item.innerHTML += Object.values(menuDistrict)[index];
    index++;
    
    if(index == Object.values(menuDistrict).length ) index = 0;
    
    item.onclick = () => {
        
        aboutDistrictGetContent(fileName);
        history.replaceState({},'',`${window.location.pathname}?${fileName}`)
      
    };
});


async function aboutDistrictGetContent(fileName){
    let divTemp = document.createElement('div');
    let locationHref = window.location.href;
    mainTitle.scrollIntoView({block: 'start'});
    // if(locationHref !=  `aboutDistrict.html?${fileName}`) 
    
    menuBtns.forEach(item => {
        if(item.innerHTML == menuDistrict[fileName]) item.classList.add('active__btn')
        else item.classList.remove('active__btn');
    });
    mainTitle.innerText = menuDistrict[fileName];
    addBreadCrunps(crumpsContainer, {
        ...breadCrumps,
        [fileName]: menuDistrict[fileName]
    });
    
    try {
        if(!mainContent.contains(mainContent.querySelector(`.${fileName}`))){
            removeOldContent();
            let request = await fetch(`components/DistrictContent/${fileName}.html`);
            divTemp.innerHTML = await request.text();
            mainContent.append(...divTemp.querySelector('.content').children);
            mainContent.classList.add('content__show');
            mainContent.classList.remove('error');
        }

    } catch (error) {
        !mainContent.classList.contains('error') && mainContent.classList.add('error');
        mainContent.classList.remove('content__show');
        console.log(error);
    }
}

function removeOldContent() {
    Object.keys(menuDistrict).forEach(key => {
        let oldContent = mainContent.querySelector(`.${key}`);
        oldContent && mainContent.removeChild(oldContent);
    })
}


export default aboutDistrictGetContent;


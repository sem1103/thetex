import { menuGovernment } from "../components/Header/getheader.js";
import addBreadCrunps from "./addBreadCrumps.js";



let breadCrumps = {
    index: 'Главная',
    government: 'Органы власти'
};
let mainTitle = document.querySelector('h1');
let location = window.location.search.slice(1);
let sideMenu = document.querySelectorAll('.side__menu button');
addBreadCrunps(breadCrumps)

function changeView(){
    document.querySelector('.adminStructure').classList.toggle('secondTemp')
}
window.changeView = changeView


async function getContent(fileName){
    try {
        let content = document.querySelector('.content');
        content.innerHTML = '';
        let divTemp = document.createElement('div');
        let res = await fetch(`components/Gorovernment/${fileName}.html`, {method: 'GET'});
        divTemp.innerHTML = await res.text();
        addBreadCrunps({
            ...breadCrumps,
            [fileName]: menuGovernment[fileName]
        })
        content.append(divTemp.querySelector(`.${fileName}`));

        mainTitle.innerText = menuGovernment[fileName]
        sideMenu.forEach((item) => {    
            if(menuGovernment[fileName] == item.innerText)item.classList.add('active__menu');
            else item.classList.remove('active__menu')
        })
        console.log(location);
        if(location == 'employeesOrganization') document.querySelector('.change__template').style.display = 'flex'
    } catch (error) {
        
    }
}


sideMenu.forEach((item,index) => {    
    item.onclick = () => {
        let fileName = Object.keys(menuGovernment)[index]
        getContent(fileName);
        history.replaceState({},'',`${window.location.pathname}?${fileName}`);
    };
})


function changeTemplate(structure, btn){
    document.querySelectorAll('.change__template button').forEach(item => item.classList.remove('active__temp'));
    let employeesOrganization = document.querySelector('.employeesOrganization');
    btn.classList.add('active__temp');
    if(structure == 'column') employeesOrganization.classList.add('column__temp');
    else employeesOrganization.classList.remove('column__temp');
}

window.changeTemplate = changeTemplate;

location && getContent(location);

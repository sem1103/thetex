import { menuGovernment } from "../components/Header/getheader.js";
import addBreadCrunps from "./addBreadCrumps.js";



let breadCrumps = {
    index: 'Главная',
    grovernment: 'Органы власти'
};
let location = window.location.search.slice(1);
let sideMenu = document.querySelectorAll('.side__menu button');
addBreadCrunps(breadCrumps)

function changeView(){
    document.querySelector('.head__municipal').classList.toggle('secondTemp')
}
window.changeView = changeView


async function getContent(fileName){
    try {
        let content = document.querySelector('.content');
        let divTemp = document.createElement('div');
        let res = await fetch(`components/Gorovernment/${fileName}.html`, {method: 'GET'});
        divTemp.innerHTML = await res.text();
        addBreadCrunps({
            ...breadCrumps,
            [fileName]: menuGovernment[fileName]
        })
        content.append(divTemp.querySelector('.head__municipal'))
    } catch (error) {
        
    }
}


sideMenu.forEach((item,index) => {    
    item.classList.add(menuGovernment[location] == item.innerHTML ? 'active__menu' : 'off__menu')
    item.href = '?'+Object.keys(menuGovernment)[index];
})

location && getContent(location);

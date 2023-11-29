import { menuGovernment } from "../components/Header/getheader.js";
import addBreadCrunps from "./addBreadCrumps.js";



let breadCrumps = {
    index: 'Главная',
    grovernment: 'Органы власти'
};
let location = window.location.search.slice(1);
let menu = document.querySelectorAll('.side__menu a');
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

location && getContent(location)
menu.forEach((item,index) => {
    let className = item.innerText == menuGovernment[index] ? 'active__menu' : '';
    item.classList.add(className)
    item.href = '?'+Object.keys(menuGovernment)[index];
})
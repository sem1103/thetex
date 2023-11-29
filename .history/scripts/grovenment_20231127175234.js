import { menuGovernment } from "../components/Header/getheader.js";
import addBreadCrunps from "./addBreadCrumps.js";



let breadCrumps = {
    index: 'Главная',
    grovernment: 'Органы власти'
};
addBreadCrunps(breadCrumps)

function changeView(){
    document.querySelector('.head__municipal').classList.toggle('secondTemp')
}
window.changeView = changeView


async function getContent(fileName){
    try {
        let content = document.querySelector('.content');
        let divTemp = document.createElement('div');
        let res = await fetch(`components/Gtovernment/${fileName}.html`, {method: 'GET'});
        divTemp.innerHTML = res.text();
        content.append(divTemp)
    } catch (error) {
        
    }
}

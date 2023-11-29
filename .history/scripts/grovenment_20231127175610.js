import { menuGovernment } from "../components/Header/getheader.js";
import addBreadCrunps from "./addBreadCrumps.js";



let breadCrumps = {
    index: 'Главная',
    grovernment: 'Органы власти'
};
let location = window.location.search.slice(1)
addBreadCrunps(breadCrumps)

function changeView(){
    document.querySelector('.head__municipal').classList.toggle('secondTemp')
}
window.changeView = changeView


async function getContent(fileName){
    try {
        let content = document.querySelector('.content');
        let divTemp = document.createElement('div');
        let res = await fetch(`components/Grovernment/${fileName}.html`, {method: 'GET'});
        divTemp.innerHTML = await res.text();
        console.log(divTemp.querySelector('.head__municipal'));
        // content.append(divTemp.querySelector(''))
    } catch (error) {
        
    }
}

getContent(location)

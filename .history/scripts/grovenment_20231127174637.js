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



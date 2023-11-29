import { publicReceptionMenu } from "../components/Header/getheader.js";
import addBreadCrunps from "./addBreadCrumps.js";


let mainTitle = document.querySelector('h1');
let location = window.location.search.slice(1);
let sideMenu = document.querySelectorAll('.side__menu button');
let breadCrumps = {
    index: 'Главная',
    government: 'Органы власти'
};


addBreadCrunps(breadCrumps)


sideMenu.forEach((item,index) => {    
    item.onclick = () => {
        let fileName = Object.keys(menuGovernment)[index]
        getContent(fileName);
        history.replaceState({},'',`${window.location.pathname}?${fileName}`);
    };
})


function uploadFile(){
    let input =document.querySelector('.upload__text input');
    input.click();
    input.addEventListener('change', ()=>{
        let fileName = this.files;
        console.log(fileName);
    })
}

window.uploadFile = uploadFile;
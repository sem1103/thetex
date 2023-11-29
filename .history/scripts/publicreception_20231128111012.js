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


function uploadFile(e){
    let input =document.querySelector('.upload__text input');
    input.click();
    console.log(e);
    input.addEventListener('change', (e)=>{
        let fileName = e.target.files[0].name
        
    })
}

window.uploadFile = uploadFile;
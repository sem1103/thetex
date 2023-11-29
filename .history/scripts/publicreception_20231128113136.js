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


function uploadFile(text){
    let input = document.querySelector('.upload input');
    input.click();
    input.addEventListener('change', (e)=>{
        let fileName = e.target.files[0].name;
        console.log(text.innerText);
        text.innerText = fileName;
        document.querySelector('.delete__file').classList.add('active__delete');
        console.log(e.target.files);

    })
}

function deleteFile(){
    let input = document.querySelector('.upload input');
    input.value = null;
    document.querySelector('.upload__text').innerText = '+ Прикрепить файл'
    document.querySelector('.delete__file').classList.remove('active__delete');
    console.log(input.files);

}

window.uploadFile = uploadFile;
window.deleteFile = deleteFile;
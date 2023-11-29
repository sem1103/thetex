import { publicReceptionMenu } from "../components/Header/getheader.js";
import addBreadCrunps from "./addBreadCrumps.js";


let mainTitle = document.querySelector('h1');
let location = window.location.search.slice(1);
let sideMenu = document.querySelectorAll('.side__menu button');
let breadCrumps = {
    index: 'Главная',
    publicreception: 'Общественная приемная'
};


addBreadCrunps(breadCrumps)


sideMenu.forEach((item,index) => {    
    item.onclick = () => {
        let fileName = Object.keys(publicReceptionMenu)[index]
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
}

window.uploadFile = uploadFile;
window.deleteFile = deleteFile;



async function getContent(fileName){
    try {
       
        let content = document.querySelector('.content');
        content.innerHTML = '';
        let divTemp = document.createElement('div');
        let res = await fetch(`components/publicReception/${fileName}.html`, {method: 'GET'});
        divTemp.innerHTML = await res.text();
        addBreadCrunps({
            ...breadCrumps,
            [fileName]: publicReceptionMenu[fileName]
        })
        content.append(divTemp.querySelector(`.${fileName}`));

        mainTitle.innerText = publicReceptionMenu[fileName];
        sideMenu.forEach((item) => {    
            if(publicReceptionMenu[fileName] == item.innerText)item.classList.add('active__menu');
            else item.classList.remove('active__menu')
        });
     

        if(fileName == 'writeMessage') {
            let script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js';
            document.body.appendChild(script);
        }
     
    } catch (error) {
        console.log(error);
    }
}

location && getContent(location);

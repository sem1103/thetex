import { documentsMenu } from "../components/Header/getheader.js";
import addBreadCrunps from "./addBreadCrumps.js";

let clearForm = document.querySelector('button[type="reset"]');
let sideMenu = document.querySelectorAll('.side__menu a');
let location = window.location.search.slice(1);

let dataRange = [];
let calendar = new AirDatepicker('#calendar', {
    range: true,
    onSelect: (data)=>{
            dataRange = data.formattedDate;
    },
    container: document.querySelector('#calendar')
});

let breadCrumps = {
    index: 'Главная',
    documents: 'Документы'
};


clearForm.onclick = () =>{
    calendar.clear();
}

addBreadCrunps(breadCrumps)


sideMenu.forEach((item,index) => {
    if(item.innerText == documentsMenu[location]) item.classList.add('active__menu');
    else item.classList = '';

    item.href = `?${Object.keys(documentsMenu)[index]}`
})




async function getContent(fileName){
    try {
       
        let content = document.querySelector('.content');
        content.innerHTML = '';
        let divTemp = document.createElement('div');
        let res = await fetch(`components/Documents/${fileName}.html`, {method: 'GET'});
        divTemp.innerHTML = await res.text();
        addBreadCrunps({
            ...breadCrumps,
            [fileName]: documentsMenu[fileName]
        })
        content.append(divTemp.querySelector(`.${fileName}`));

        mainTitle.innerText = documentsMenu[fileName];
        sideMenu.forEach((item) => {    
            if(documentsMenu[fileName] == item.innerText)item.classList.add('active__menu');
            else item.classList.remove('active__menu')
        });
     

     
     
    } catch (error) {
        console.log(error);
    }
}
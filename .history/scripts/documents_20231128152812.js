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
    if(!location)sideMenu[0].classList.add('active__menu');

    item.href = `?${Object.keys(documentsMenu)[index]}`
})

import { documentsMenu } from "../components/Header/getheader.js";
import addBreadCrunps from "./addBreadCrumps.js";

let clearForm = document.querySelector('button[type="reset"]');
let sideMenu = document.querySelectorAll('.side__menu a');
let location = window.location.search.slice(1);
let mainTitle = document.querySelector('h1');

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

let allDocuments = {
    fitstDocs: [
        {
            title: 'Лицензия на деятельность по защите информации 1.1',
            data: '26.09.2023',
            size: '32,2'
        },
        {
            title: 'Сертификат соответствия 1.2',
            text:'Сертификат соответствия Госстроя, выдается на продукцию, используемую в строительстве, и подтверждающий, что продукция соответствует требованиям основных нормативно-технических документов, установленных для данной продукции при сертификации продукции в строительстве.',
            data: '26.09.2023',
            size: '14'
        },
        {
            title: 'Лицензия на оказание услуг 1.3',
            data: '26.09.2023',
            size: '22,2'
        },
        {
            title: 'Лицензия на оказание услуг 1.4',
            data: '26.09.2023',
            size: '42,2'
        }
    ],
    secondDocs: [
        {
            title: 'Лицензия на деятельность по защите информации 2.1',
            data: '26.09.2023',
            size: '32,2'
        },
        {
            title: 'Сертификат соответствия 2.2',
            text:'Сертификат соответствия Госстроя, выдается на продукцию, используемую в строительстве, и подтверждающий, что продукция соответствует требованиям основных нормативно-технических документов, установленных для данной продукции при сертификации продукции в строительстве.',
            data: '26.09.2023',
            size: '14'
        },
        {
            title: 'Лицензия на оказание услуг 2.3',
            data: '26.09.2023',
            size: '22,2'
        },
        {
            title: 'Лицензия на оказание услуг 2.4',
            data: '26.09.2023',
            size: '42,2'
        }
    ]
}


clearForm.onclick = () =>{
    calendar.clear();
}

addBreadCrunps(breadCrumps)


sideMenu.forEach((item,index) => {
    if(item.innerText == documentsMenu[location]) item.classList.add('active__menu');
    else item.classList = '';

    item.href = `?${Object.keys(documentsMenu)[index]}`
})




async function getContent(fileName, pagine = false){
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

        if(fileName == 'searchDocuments') {
            getAllDocuments(divTemp.div)
        }
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


function getAllDocuments(pattern){
    console.log(pattern);
}




location && getContent(location);
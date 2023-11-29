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
            icon: 'doc-icon',
            title: 'Лицензия на деятельность по защите информации 1.1',
            data: '26.09.2023',
            size: '32,2',
            downloadLink: '...'
        },
        {
            icon: 'pdf-icon',
            title: 'Сертификат соответствия 1.2',
            text:'Сертификат соответствия Госстроя, выдается на продукцию, используемую в строительстве, и подтверждающий, что продукция соответствует требованиям основных нормативно-технических документов, установленных для данной продукции при сертификации продукции в строительстве.',
            data: '26.09.2023',
            size: '14',
            downloadLink: '...'
        },
        {
            icon: 'doc-icon',
            title: 'Лицензия на оказание услуг 1.3',
            data: '26.09.2023',
            size: '22,2',
            downloadLink: '...'
        },
        {
            icon: 'doc-icon',
            title: 'Лицензия на оказание услуг 1.4',
            data: '26.09.2023',
            size: '42,2',
            downloadLink: '...'
        }
        
    ],
    secondDocs: [
        {
            icon: 'doc-icon',
            title: 'Лицензия на деятельность по защите информации 2.1',
            data: '26.09.2023',
            size: '32,2',
            downloadLink: '...'
        },
        {
            icon: 'pdf-icon',
            title: 'Сертификат соответствия 2.2',
            text:'Сертификат соответствия Госстроя, выдается на продукцию, используемую в строительстве, и подтверждающий, что продукция соответствует требованиям основных нормативно-технических документов, установленных для данной продукции при сертификации продукции в строительстве.',
            data: '26.09.2023',
            size: '14',
            downloadLink: '...'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 2.3',
            data: '26.09.2023',
            size: '22,2',
            downloadLink: '...'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 2.4',
            data: '26.09.2023',
            size: '42,2',
            downloadLink: '...'
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
        mainTitle.innerText = documentsMenu[fileName];
        sideMenu.forEach((item) => {    
            if(documentsMenu[fileName] == item.innerText)item.classList.add('active__menu');
            else item.classList.remove('active__menu')
        });

        if(fileName == 'searchDocuments') {
            getAllDocuments(divTemp.querySelector('.searchDocuments'), content);
            return
        }
        content.append(divTemp.querySelector(`.${fileName}`));

       
     
    } catch (error) {
        console.log(error);
    }
}


function getAllDocuments(pattern, content){
    let allDocs = Object.values(allDocuments).reduce((accum, array) => accum.concat(array), []);
    
    allDocs.forEach(item => {
        let clonePattern = document.createElement('div');
        clonePattern.classList.add('searchDocuments')
        clonePattern.innerHTML = pattern.innerHTML

        let img = clonePattern.querySelector('img');
        let title = clonePattern.querySelector('h5');
        let data = clonePattern.querySelector('.data');
        let size = clonePattern.querySelector('.size');
        let text = clonePattern.querySelector('.document__text');
        let downloadBtn = clonePattern.querySelector('.download__btn button');

        img.src = `img/${item.icon}.png`;
        title.innerText = item.title;
        data.innerText = item.data;
        size.innerHTML = item.size;
        text.innerText = item.text ? item.text : '';
        downloadBtn.onclick = ()=> downloadDoc(item.downloadLink);
        pattern.onclick = ()=> downloadDoc(item.downloadLink);

        content.appendChild(clonePattern)
        console.log(clonePattern);
    })


}


function downloadDoc(link){
    console.log('Начинается скачивание документа по ссылк: ' + link);
}



location && getContent(location);
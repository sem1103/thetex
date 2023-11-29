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
            downloadLink: '1.1'
        },
        {
            icon: 'pdf-icon',
            title: 'Сертификат соответствия 1.2',
            text:'Сертификат соответствия Госстроя, выдается на продукцию, используемую в строительстве, и подтверждающий, что продукция соответствует требованиям основных нормативно-технических документов, установленных для данной продукции при сертификации продукции в строительстве.',
            data: '26.09.2023',
            size: '14',
            downloadLink: '1.2'
        },
        {
            icon: 'doc-icon',
            title: 'Лицензия на оказание услуг 1.3',
            data: '26.09.2023',
            size: '22,2',
            downloadLink: '1.3'
        },
        {
            icon: 'doc-icon',
            title: 'Лицензия на оказание услуг 1.4',
            data: '26.09.2023',
            size: '42,2',
            downloadLink: '1.4'
        }
        
    ],
    secondDocs: [
        {
            icon: 'doc-icon',
            title: 'Лицензия на деятельность по защите информации 2.1',
            data: '26.09.2023',
            size: '32,2',
            downloadLink: '2.1'
        },
        {
            icon: 'pdf-icon',
            title: 'Сертификат соответствия 2.2',
            text:'Сертификат соответствия Госстроя, выдается на продукцию, используемую в строительстве, и подтверждающий, что продукция соответствует требованиям основных нормативно-технических документов, установленных для данной продукции при сертификации продукции в строительстве.',
            data: '26.09.2023',
            size: '14',
            downloadLink: '2.2'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 2.3',
            data: '26.09.2023',
            size: '22,2',
            downloadLink: '2.3'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 2.4',
            data: '26.09.2023',
            size: '42,2',
            downloadLink: '2.4'
        }
    ],
    thirdDocs: [
        {
            icon: 'doc-icon',
            title: 'Лицензия на деятельность по защите информации 3.1',
            data: '26.09.2023',
            size: '32,2',
            downloadLink: '3.1'
        },
        {
            icon: 'pdf-icon',
            title: 'Сертификат соответствия 3.2',
            text:'Сертификат соответствия Госстроя, выдается на продукцию, используемую в строительстве, и подтверждающий, что продукция соответствует требованиям основных нормативно-технических документов, установленных для данной продукции при сертификации продукции в строительстве.',
            data: '26.09.2023',
            size: '14',
            downloadLink: '3.2'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 3.3',
            data: '26.09.2023',
            size: '22,2',
            downloadLink: '3.3'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 3.4',
            data: '26.09.2023',
            size: '42,2',
            downloadLink: '3.4'
        }
    ],
    fourthDocs: [
        {
            icon: 'doc-icon',
            title: 'Лицензия на деятельность по защите информации 4.1',
            data: '26.09.2023',
            size: '32,2',
            downloadLink: '4.1'
        },
        {
            icon: 'pdf-icon',
            title: 'Сертификат соответствия 4.2',
            text:'Сертификат соответствия Госстроя, выдается на продукцию, используемую в строительстве, и подтверждающий, что продукция соответствует требованиям основных нормативно-технических документов, установленных для данной продукции при сертификации продукции в строительстве.',
            data: '26.09.2023',
            size: '14',
            downloadLink: '4.2'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 4.3',
            data: '26.09.2023',
            size: '22,2',
            downloadLink: '4.3'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 4.4',
            data: '26.09.2023',
            size: '42,2',
            downloadLink: '4.4'
        }
    ],
    fifthDocs: [
        {
            icon: 'doc-icon',
            title: 'Лицензия на деятельность по защите информации 5.1',
            data: '26.09.2023',
            size: '32,2',
            downloadLink: '5.1'
        },
        {
            icon: 'pdf-icon',
            title: 'Сертификат соответствия 5.2',
            text:'Сертификат соответствия Госстроя, выдается на продукцию, используемую в строительстве, и подтверждающий, что продукция соответствует требованиям основных нормативно-технических документов, установленных для данной продукции при сертификации продукции в строительстве.',
            data: '26.09.2023',
            size: '14',
            downloadLink: '5.2'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 5.3',
            data: '26.09.2023',
            size: '22,2',
            downloadLink: '5.3'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 5.4',
            data: '26.09.2023',
            size: '42,2',
            downloadLink: '5.4'
        }
    ],
    sixthDocs: [
        {
            icon: 'doc-icon',
            title: 'Лицензия на деятельность по защите информации 6.1',
            data: '26.09.2023',
            size: '32,2',
            downloadLink: '6.1'
        },
        {
            icon: 'pdf-icon',
            title: 'Сертификат соответствия 6.2',
            text:'Сертификат соответствия Госстроя, выдается на продукцию, используемую в строительстве, и подтверждающий, что продукция соответствует требованиям основных нормативно-технических документов, установленных для данной продукции при сертификации продукции в строительстве.',
            data: '26.09.2023',
            size: '14',
            downloadLink: '6.2'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 6.3',
            data: '26.09.2023',
            size: '22,2',
            downloadLink: '5.3'
        },
        {
            icon: 'pdf-icon',
            title: 'Лицензия на оказание услуг 6.4',
            data: '26.09.2023',
            size: '42,2',
            downloadLink: '6.4'
        }
    ]
};

let globalPattern = document.createElement('div');
let allDocs = Object.values(allDocuments).reduce((accum, array) => accum.concat(array), []);

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
    
    
    allDocs.forEach(item => {
        let clonePattern = document.createElement('div');
        clonePattern.classList = 'searchDocuments document'
        clonePattern.innerHTML = pattern.innerHTML;

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
        clonePattern.onclick = ()=> downloadDoc(item.downloadLink);

        content.appendChild(clonePattern)
    })

    paginationHandler(pattern);
}


function downloadDoc(link){
    console.log('Начинается скачивание документа по ссылк: ' + link);
};


function paginationHandler(pattern){

}



location && getContent(location);
import addBreadCrunps from "../scripts/addBreadCrumps.js";
import { menuPressCentre } from "../components/Header/getheader.js";

let breadCrumps = {
    index: 'Главная',
    pressCentre: 'Пресс-центр'
};
let dataRange = [];
let location = window.location.search.slice(1);
let mainTitle = document.querySelector('h1');
let sideMenu = document.querySelectorAll('.side__menu a');
let clearForm = document.querySelector('button[type="reset"]');

let calendar = new AirDatepicker('#calendar', {
    range: true,
    onSelect: (data)=>{
            dataRange = data.formattedDate;
    }
});


clearForm.onclick = () =>{
    calendar.clear();
}




/*------NewsContent------*/

let newsArray = [
    {
        img: 'img/newsImg/news1.png',
        newsSource: 'Новости ЖКХ 1',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    },
    {
        img: 'img/newsImg/news2.png',
        newsSource: 'Потребительская сфера 2',
        title: 'Еще один длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '1 марта 2023'
    },
    {
        img: 'img/newsImg/news3.png',
        newsSource: 'Деятельность администрации 3',
        title: 'Новый еще один заголовок длинный в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '28 апреля 2023'
    },
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ 4',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ 5',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ 6',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ 7',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ 8',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ 9',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ 10',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ 11',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в \n\n общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
];

let eventsArray = [
    {
        img: 'img/eventsImg/news1.png',
        newsSource: 'Раздел',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.\n\nСуществуют две основные трактовки понятия «текст»: имманентная и репрезентативная.',
        data: '14 февраля 2023'
    }
]
let index = 0;

async function getNewsItem(fileName){
    let divTemp = document.createElement('div');
    let res = await fetch(`components/pressCentreContent/${fileName}.html`, {method: 'GET'});

    divTemp.innerHTML = await res.text();
    addBreadCrunps({
        ...breadCrumps,
        fileName: menuPressCentre[fileName]
    })
    mainTitle.innerText = menuPressCentre[fileName];

    return divTemp.querySelector('.news__item');
}


async function showContent(fileName, showFlag = true ){
    let wrapper = document.querySelector('.content__wrapper'); 
    let pattern = await getNewsItem(fileName);
    let img = pattern.querySelector('img');
    let newsSource = pattern.querySelector('.news__source');
    let titleLink = pattern.querySelector('a');
    let newsText = pattern.querySelector('.news__text');
    let newsData = pattern.querySelector('.data');
    let addBtn = document.querySelector('.content__container .addItemBtn');
    
    
    if(index <= newsArray.length && showFlag){
        newsArray.slice(index, index + 3).forEach(item =>{
            img.src = item.img;
            img.setAttribute('data-src', item.img);
            newsSource.innerText = item.newsSource;
            titleLink.innerText = item.title;
            titleLink.href = 'pressCentre.html'
            newsText.innerText = item.text;
            newsData.innerText = item.data;
            wrapper.appendChild(pattern.cloneNode(true));
        })
        index += 3;
    }
    
    addBtn.style.display = index > newsArray.length ? 'none' : 'table';

}
window.showContent = showContent
/*------NewsContent-END-----*/



if(location == 'news' || location == '') showContent('news');
sideMenu.forEach(item => {
    if(item.innerText == menuPressCentre[location]) item.classList.add('active__menu');
    else item.classList = '';
    if(!location)sideMenu[0].classList.add('active__menu');

    item.onclick = (e) => {
        e.preventDefault();
        console.log(1);
    }
})


export default showContent;
import addBreadCrunps from "../scripts/addBreadCrumps.js";
import { menuPressCentre } from "../components/Header/getheader.js";

let breadCrumps = {
    index: 'Главная',
    pressCentre: 'Пресс-центр'
};
let dataRange = [];
let location = window.location.search.slice(1);
let mainTitle = document.querySelector('h1');
let sideMenu = document.querySelectorAll('.side__menu button');
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
        img: 'img/eventsImg/events1.png',
        newsSource: 'Раздел1',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.\n\nСуществуют две основные трактовки понятия «текст»: имманентная и репрезентативная.',
        data: '14 февраля 2023'
    },
    {
        img: 'img/eventsImg/events2.png',
        newsSource: 'Раздел2',
        title: 'Длинный заголовок в несколько строк',
        text: 'Существуют две основные трактовки понятия «текст»: имманентная и репрезентативная. Текст — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и последовательность символов. ',
        data: '14 февраля 2023'
    },
    {
        img: 'img/eventsImg/events3.png',
        newsSource: 'Раздел3',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    },
    {
        img: 'img/eventsImg/events3.png',
        newsSource: 'Раздел4',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    },
    {
        img: 'img/eventsImg/events3.png',
        newsSource: 'Раздел5',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
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

    return divTemp.querySelector(`.${fileName}`);
}


async function showContent(fileName, showFlag = true ){
    let wrapper = document.querySelector('.content__wrapper'); 
    let pattern = await getNewsItem(fileName);
    
    let addBtn = document.querySelector('.content__container .addItemBtn');
    let arr = [];
   
    if(fileName == 'news') arr = newsArray;
    else if(fileName == 'events') arr = eventsArray;
    
    if(index <= arr.length && showFlag){
        arr.slice(index, index + 3).forEach(item =>{
            let clonePattern = pattern.cloneNode(true)
            let img = clonePattern.querySelector('img');
            let newsSource = clonePattern.querySelector('.source');
            let titleLink = clonePattern.querySelector('a');
            let newsText = clonePattern.querySelector('.text');
            let newsData = clonePattern.querySelector('.data');

            img.src = item.img;
            img.setAttribute('data-src', item.img);
            newsSource.innerText = item.newsSource;
            titleLink.innerText = item.title;
            titleLink.href = 'pressCentre.html'
            newsText.innerText = item.text;
            newsData.innerText = item.data;
            wrapper.appendChild(clonePattern)
        })
        index += 3;
    }
    let wrapperChildren = Array.from(wrapper.children);

    wrapperChildren.forEach(item =>{
        if(!item.classList.contains(fileName))  wrapper.removeChild(item)
    })

  
    addBtn.style.display = index > newsArray.length ? 'none' : 'table';

}
window.showContent = showContent;

/*------NewsContent-END-----*/



if(location) showContent(location);
else showContent('news');

sideMenu.forEach((item,index) => {
    if(item.innerText == menuPressCentre[location]) item.classList.add('active__menu');
    else item.classList = '';
    if(!location)sideMenu[0].classList.add('active__menu');

    item.onclick = () => {
        let fileName = Object.keys(menuPressCentre)[index]
        showContent(fileName, false);
        history.replaceState({},'',`${window.location.pathname}?${fileName}`);
    }
})


export default showContent;
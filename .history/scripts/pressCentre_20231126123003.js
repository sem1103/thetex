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
    },
    container: document.querySelector('#calendar')
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

let activityArray = [
    {
        background: 'img/activityImg/bg1.png',
        newsSource: 'Раздел1',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст — зафиксированная на каком-либо материальном носителе человеческая мысль',
        data: '14 февраля 2023',
    },
    {
        background: 'img/activityImg/bg2.png',
        newsSource: 'Раздел2',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст — зафиксированная на каком-либо материальном носителе человеческая мысль связная и полная последовательность символов',
        data: '14 февраля 2023',
    },
    {
        background: 'img/activityImg/bg3.png',
        newsSource: 'Раздел3',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане.',
        data: '14 февраля 2023',
    },
    {
        background: 'img/activityImg/bg1.png',
        newsSource: 'Раздел4',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст — зафиксированная на каком-либо материальном носителе человеческая мысль',
        data: '14 февраля 2023',
    }
];

let videoArray = [
    {
        img: 'img/videoImg/video1.png',
        title: 'Длинный заголовок в несколько строк',
        data: '14 февраля 2023',
        iframeSrc: 'https://www.youtube.com/embed/4xDzrJKXOOY',
        iframeTitle:'synthwave radio 🌌 - beats to chill/game to'
    },
    {
        img: 'img/videoImg/video2.png',
        title: 'Длинный заголовок в несколько строк',
        data: '14 февраля 2023',
        iframeSrc: 'https://www.youtube.com/embed/jfKfPfyJRdk',
        iframeTitle:'lofi hip hop radio 📚 - beats to relax/study to'
    },
    {
        img: 'img/videoImg/video3.png',
        title: 'Длинный заголовок в несколько строк',
        data: '14 февраля 2023',
        iframeSrc: 'https://www.youtube.com/embed/4xDzrJKXOOY',
        iframeTitle:'synthwave radio 🌌 - beats to chill/game to'
    },
    {
        img: 'img/videoImg/video4.png',
        title: 'Длинный заголовок в несколько строк',
        data: '14 февраля 2023',
        iframeSrc: 'https://www.youtube.com/embed/4xDzrJKXOOY',
        iframeTitle:'synthwave radio 🌌 - beats to chill/game to'
    }
];

let photoArray = [
    {
        background: 'img/photoGallery/photo1.png',
        newsSource: '8 фото',
        title: 'Конференция по автоматизации бизнеса',
        data: '29.09.2023',
    },
    {
        background: 'img/photoGallery/photo2.png',
        newsSource: '8 фото',
        title: 'Название альбома2',
        data: '29.09.2023',
    },
    {
        background: 'img/photoGallery/photo3.png',
        newsSource: '8 фото',
        title: 'Название альбома3',
        data: '29.09.2023',
    },
    {
        background: 'img/photoGallery/photo1.png',
        newsSource: '8 фото',
        title: 'Название альбома4',
        data: '29.09.2023',
    },
    {
        background: 'img/photoGallery/photo2.png',
        newsSource: '8 фото',
        title: 'Название альбома5',
        data: '29.09.2023',
    },
    {
        background: 'img/photoGallery/photo3.png',
        newsSource: '8 фото',
        title: 'Название альбома6',
        data: '29.09.2023',
    },
    {
        background: 'img/photoGallery/photo1.png',
        newsSource: '8 фото',
        title: 'Название альбома7',
        data: '29.09.2023',
    },
    {
        background: 'img/photoGallery/photo2.png',
        newsSource: '8 фото',
        title: 'Название альбома8',
        data: '29.09.2023',
    },
    {
        background: 'img/photoGallery/photo3.png',
        newsSource: '8 фото',
        title: 'Название альбома9',
        data: '29.09.2023',
    }
]
let iframe = document.querySelector('iframe');
let videoDisplay = document.querySelector('.video__display');
let videoGalleryItems = [];
let index = 0;

async function getItems(fileName){
    let divTemp = document.createElement('div');
    let res = await fetch(`components/pressCentreContent/${fileName}.html`, {method: 'GET'});

    divTemp.innerHTML = await res.text();
    addBreadCrunps({
        ...breadCrumps,
        fileName: menuPressCentre[fileName]
    })
    mainTitle.innerText = menuPressCentre[fileName];
    return divTemp.querySelector(`.${fileName}`);
};


async function showContent(fileName ){
    let wrapper = document.querySelector('.content__wrapper'); 
    let pattern = await getItems(fileName);
    let addBtn = document.querySelector('.content__container .addItemBtn');
    let arr = [];
    
    if(fileName == 'news') arr = newsArray;
    else if(fileName == 'events') arr = eventsArray;
    else if(fileName == 'activity') arr = activityArray;
    else if(fileName == 'videoGallery') arr = videoArray;
    else if(fileName == 'photoGallery') arr = photoArray;
    
    if(index <= arr.length){
        arr.slice(index, index + 3).forEach(item =>{

            let clonePattern = pattern.cloneNode(true)
            let img = clonePattern.querySelector('img');
            let newsSource = clonePattern.querySelector('.source');
            let titleLink = clonePattern.querySelector('a');
            let newsText = clonePattern.querySelector('.text');
            let newsData = clonePattern.querySelector('.data');

            newsSource && (newsSource.innerText = item.newsSource) ;
            titleLink && (titleLink.innerText = item.title);
            titleLink && (titleLink.href = 'pressCentre.html');
            newsText && (newsText.innerText = item.text);
            newsData.innerText = item.data;
            fileName == 'videoGallery' (clonePattern.onclick = ()=> playVideo(item.iframeSrc, item.iframeTitle));

            if(img){
                img.src = item.img;
                img.setAttribute('data-src', item.img);
            } else {
                clonePattern.style.background = `url(${item.background}) center/cover`;
            }
            wrapper.appendChild(clonePattern)
        })
        index += 3;
    }
    let wrapperChildren = Array.from(wrapper.children);

    wrapperChildren.forEach(item =>{
        videoGalleryItems.push(item)
    })
    addBtn.onclick = () => showContent(fileName)
  
    addBtn.style.display = index == arr.length ? 'none' : 'table';

}
window.showContent = showContent;

/*------NewsContent-END-----*/



if(location) showContent(location);
else showContent('news');

sideMenu.forEach((item,index) => {
    if(item.innerText == menuPressCentre[location]) item.classList.add('active__menu');
    else item.classList = '';
    if(!location)sideMenu[0].classList.add('active__menu');

    item.href = `?${Object.keys(menuPressCentre)[index]}`
})


function playVideo(src, title){
    let modal = document.querySelector('.video__modal');
    let iframe = document.querySelector('.video__modal iframe');
    iframe.setAttribute('src', src);
    iframe.setAttribute('title', title);

    modal.classList.toggle('video__modal__show');
    setHeigthIframe();
};

function closeVideo(e){
    let iframe = document.querySelector('.video__modal iframe');
    iframe.removeAttribute('src');
    e.classList.toggle('video__modal__show');
}
window.closeVideo = closeVideo


setHeigthIframe()
  function setHeigthIframe(){
    let aspecto = 6/3;
    let width = iframe.offsetWidth;
    iframe.height = `${width / aspecto}px`
};
window.addEventListener('resize', setHeigthIframe)

export default showContent;
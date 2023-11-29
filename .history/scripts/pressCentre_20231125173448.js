import addBreadCrunps from "../scripts/addBreadCrumps.js";

let breadCrumps = {
    index: 'Главная',
    pressCentre: 'Пресс-центр'
};
let dataRange = [];
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

addBreadCrunps(breadCrumps)


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
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
];
let index = 0;

async function getNewsItem(){
    let divTemp = document.createElement('div');
    let pattern = await fetch('components/pressCentreContent/news.html', {method: 'GET'});
    divTemp.innerHTML = await pattern.text();
    return divTemp.querySelector('.news__item')
}


async function showNewsItems(){
    let newsContainer = document.querySelector('.news__container');
    let pattern = await getNewsItem();
    let img = pattern.querySelector('img');
    let newsSource = pattern.querySelector('.news__source');
    let titleLink = pattern.querySelector('a');
    let newsText = pattern.querySelector('.news__text');
    let newsData = pattern.querySelector('.data');
    let wrapper = document.querySelector('.news__wrapper'); 
    let addBtn = document.querySelector('.news__container .addItemBtn')
    
    if(index <= newsArray.length){
        
        newsArray.slice(index, index + 3).forEach(item =>{
            img.src = item.img;
            img.setAttribute('data-src', item.img);
            newsSource.innerText = item.newsSource;
            titleLink.innerText = item.title;
            titleLink.href = 'pressCentre.html'
            newsText.innerText = item.text;
            newsData.innerText = item.data;
            wrapper.append(pattern);
        })
    }
    index += 3;
    console.log(newsArray.length, index);
    addBtn.style.display = index > newsArray.length ? 'none' : 'table'
    newsContainer.append(wrapper)

}
window.showNewsItems = showNewsItems

showNewsItems()


/*------NewsContent-END-----*/
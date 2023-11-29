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
        newsSource: 'Новости ЖКХ',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    },
    {
        img: 'img/newsImg/news2.png',
        newsSource: 'Потребительская сфера',
        title: 'Еще один длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '1 марта 2023'
    },
    {
        img: 'img/newsImg/news3.png',
        newsSource: 'Деятельность администрации',
        title: 'Новый еще один заголовок длинный в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '28 апреля 2023'
    },
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
    ,
    {
        img: 'img/newsImg/news4.png',
        newsSource: 'Новости ЖКХ',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
];

async function getNewsItem(){
    let divTemp = document.createElement('div');
    let pattern = await fetch('components/pressCentreContent/news.html', {method: 'GET'});
    divTemp.innerHTML = await pattern.text();
    return divTemp.querySelector('.news__item')
}


async function showNewsItems(quantity){
    let newsContainer = document.querySelector('.news__container');
    let pattern = await getNewsItem();
    let img = pattern.querySelector('img');
    let newsSource = pattern.querySelector('.news__source');
    let titleLink = pattern.querySelector('a');
    let newsText = pattern.querySelector('.news__text');
    let newsData = pattern.querySelector('.data');
    let wrapper = document.querySelector('.news__wrapper'); 
    let itemQuantitiWrapper = wrapper.children;
    for(let i = 0; i <= 1; i++){
        // if(i <= quantity){
            img.src = newsArray[i].img;
            img.setAttribute('data-src', newsArray[i].img);
            newsSource.innerText = newsArray[i].newsSource;
            titleLink.innerText = newsArray[i].title;
            newsText.innerText = newsArray[i].text;
            newsData.innerText = newsArray[i].data;
            wrapper.appendChild(pattern.cloneNode(true));
        // }
    }
    console.log(itemQuantitiWrapper.length);
    
    // newsArray.forEach(item =>{
    //     ++newsIndex;
    //     if(newsIndex <= quantity){
    //         img.src = item.img;
    //         img.setAttribute('data-src', item.img);
    //         newsSource.innerText = item.newsSource;
    //         titleLink.innerText = item.title;
    //         newsText.innerText = item.text;
    //         newsData.innerText = item.data;
    //         wrapper.appendChild(pattern.cloneNode(true));
    //     }
       
    //     console.log(newsIndex, quantity);
    // })
   

 
    newsContainer.append(wrapper)

}
window.showNewsItems = showNewsItems

showNewsItems(3)


/*------NewsContent-END-----*/
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
        img: 'img/news1.png',
        newsSource: 'Новости ЖКХ',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    },
    {
        img: 'img/news2.png',
        newsSource: 'Потребительская сфера',
        title: 'Еще один длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '1 марта 2023'
    },
    {
        img: 'img/news3.png',
        newsSource: 'Деятельность администрации',
        title: 'Новый еще один заголовок длинный в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '28 апреля 2023'
    },
    {
        img: 'img/news4.png',
        newsSource: 'Новости ЖКХ',
        title: 'Длинный заголовок в несколько строк',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        data: '14 февраля 2023'
    }
];


async function getNewsContent(quantity){
    let divTemp = document.createElement('div');
    let content = document.querySelector('.content')

    let pattern = await fetch('components/pressCentreContent/news.html', {method: 'GET'});
    divTemp.innerHTML = await pattern.text();
    console.log(divTemp.querySelector('.content').childNodes);
    content.append(...divTemp.querySelector('.content').children)
    

}
getNewsContent(6)

/*------NewsContent-END-----*/
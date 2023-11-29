let projects = [
    {
        backgtoundImg: 'img/projectImg/bg1.png',
        dataFrom: '01.09.23',
        dataTo: '30.09.23',
        title: 'Длинный заголовок в несколько строк1',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        link: '#'
    },
    {
        backgtoundImg: 'img/projectImg/bg2.png',
        dataFrom: '01.07.23',
        dataTo: '30.09.23',
        title: 'Длинный заголовок в несколько строк2',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        link: '#'
    },
    {
        backgtoundImg: 'img/projectImg/bg3.png',
        dataFrom: '01.07.23',
        dataTo: '30.09.23',
        title: 'Длинный заголовок в несколько строк3',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        link: '#'
    },
    {
        backgtoundImg: 'img/projectImg/bg4.png',
        dataFrom: '01.07.23',
        dataTo: '30.09.23',
        title: 'Длинный заголовок в несколько строк4',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.',
        link: '#'
    }
];

let index = 0;

async function getPattern(){
    let tempDiv = document.createElement('div');
    let res = await fetch('components/ProjectPattern/project.html', {method: 'GET'});
    tempDiv.innerHTML = await res.text();
    return tempDiv.querySelector('.project')
}

async function showProjects(){
    let pattern = await getPattern();
    let container = document.querySelector('.projects');
    if(index < projects.length){
        projects.slice(index, index+3).forEach(item =>{
            let dataFrom = pattern.querySelector('.from');
            let dataTo = pattern.querySelector('.to');
            let title = pattern.querySelector('h4 a');
            let text = pattern.querySelector('.project__text');

            dataFrom.innerText = item.dataFrom;
            dataTo.innerText = item.dataTo;
            title.innerText = item.title;
            text.innerHTML = item.text;
            title.src = item.link;
            pattern.style.background = `url(${item.backgtoundImg}) center/cover`;
            container.append(pattern.cloneNode(true))
        });
        index += 3
    }
}

showProjects()
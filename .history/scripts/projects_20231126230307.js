let projects = [
    {
        backgtoundImg: 'img/projectImg/bg1.png',
        dataFrom: '01.09.23',
        dataTo: '30.09.23',
        title: 'Длинный заголовок в несколько строк1',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.'
    },
    {
        backgtoundImg: 'img/projectImg/bg2.png',
        dataFrom: '01.07.23',
        dataTo: '30.09.23',
        title: 'Длинный заголовок в несколько строк2',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.'
    },
    {
        backgtoundImg: 'img/projectImg/bg3.png',
        dataFrom: '01.07.23',
        dataTo: '30.09.23',
        title: 'Длинный заголовок в несколько строк3',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.'
    },
    {
        backgtoundImg: 'img/projectImg/bg4.png',
        dataFrom: '01.07.23',
        dataTo: '30.09.23',
        title: 'Длинный заголовок в несколько строк4',
        text: 'Текст зафиксированная на каком-либо  носителе человеческая мысль в общем плане связная и полная последовательность символов.'
    }
];

async function getPattern(){
    let tempDiv = document.createElement('div');
    let res = await fetch('components/ProjectPattern/project.html', {method: 'GET'});
    tempDiv.innerHTML = res.text();
    console.log(tempDiv);
}
getPattern()
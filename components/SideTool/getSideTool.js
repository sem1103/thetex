(async function getSideTool(){
    let sideToolContent = document.querySelector('.intro__tools');
    let request = await fetch('components/SideTool/sideTool.html', {method: 'GET'});
    let divTemp = document.createElement('div');
    divTemp.innerHTML = await request.text();

    sideToolContent.append(...divTemp.querySelector('#content').children)
})()
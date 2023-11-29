async function getContent(fileName){
    let mainContent = document.querySelector('.main__content');
    let divTemp = document.createElement('div');

    let request = await fetch(`components/DistrictContent/${fileName}.html`);
    divTemp.innerHTML = await request.text();

    mainContent.append(...divTemp.querySelector('.content').children)
    console.log(divTemp);
}



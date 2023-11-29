let menuArray = {
    aboutInform: 'Общая информация',
    history: 'История',
    tourism: 'Туризм и отдых',
    mediaDistrict: 'СМИ района',
    globalCollab: 'Международное сотрудничество',
    emergencyDef: 'Защита населения и территории от ЧС',
    staticInfo: 'Статическая информация',
    legislativeMap: 'Законодательная карта'
}

let menuBtns = document.querySelectorAll('.menu ul button');

menuBtns.forEach((item, index) =>{
    item.innerHTML = Object.values(menuArray)[index];
    // if(index == )
})
console.log(menuArray.length);

// Object.entries(menuArray).forEach(([key,value], index)=>{
//     // console.log(key, value, index);
//     console.log(menuBtns[index]);
//     menuBtns[index].innerHTML = value;

// })

async function getContent(fileName){
    let mainContent = document.querySelector('.main__content');
    let divTemp = document.createElement('div');

    let request = await fetch(`components/DistrictContent/${fileName}.html`);
    divTemp.innerHTML = await request.text();

    mainContent.append(...divTemp.querySelector('.content').children)
    console.log(divTemp);
}



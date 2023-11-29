let menuSection = document.querySelector('.menu');
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
let index = 0;

let menuBtns = document.querySelectorAll('.menu ul button');

menuBtns.forEach(item =>{
   
    item.innerHTML += Object.values(menuArray)[index];
    ++index;
    item.onclick = ()=> {
        console.log(index);
        menuSection.classList.toggle('content__show');
        getContent(Object.keys(menuArray)[index])
    }
    if(index == Object.values(menuArray).length ) index = 0;
    

    

})


// Object.entries(menuArray).forEach(([key,value], index)=>{
//     // console.log(key, value, index);
//     console.log(menuBtns[index]);
//     menuBtns[index].innerHTML = value;

// })

async function getContent(fileName){
    console.log(fileName);
    let mainContent = document.querySelector('.main__content');
    let divTemp = document.createElement('div');

    let request = await fetch(`components/DistrictContent/${fileName}.html`);
    divTemp.innerHTML = await request.text();

    mainContent.append(...divTemp.querySelector('.content').children)
    console.log(divTemp);
}



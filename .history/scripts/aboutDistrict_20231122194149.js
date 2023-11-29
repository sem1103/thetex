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
    let fileName = Object.keys(menuArray)[index];
    item.innerHTML += Object.values(menuArray)[index];
    index++;
    
    if(index == Object.values(menuArray).length ) index = 0;
    
    item.onclick = ()=> {
        console.log(fileName);
        console.log(index);
        getContent(fileName)
    }
    

})


// Object.entries(menuArray).forEach(([key,value], index)=>{
//     // console.log(key, value, index);
//     console.log(menuBtns[index]);
//     menuBtns[index].innerHTML = value;

// })

async function getContent(fileName){
    let mainContent = document.querySelector('.main__content');
    let divTemp = document.createElement('div');

    try {
        let request = await fetch(`components/DistrictContent/${fileName}.html`);
        divTemp.innerHTML = await request.text();
        mainContent.append(...divTemp.querySelector('.content').children);
    } catch (error) {
        console.log(error);
    }
}



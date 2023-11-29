let mainContent = document.querySelector('.main__content');

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
    

});


async function getContent(fileName){
    let divTemp = document.createElement('div');
    
    try {
        if(!mainContent.contains(mainContent.querySelector(`.${fileName}`))){
            removeOldContent();
            let request = await fetch(`components/DistrictContent/${fileName}.html`);
            divTemp.innerHTML = await request.text();
            mainContent.append(...divTemp.querySelector('.content').children);
            mainContent.classList.add('content__show');
            mainContent.classList.remove('error');
        }

    } catch (error) {
        !mainContent.classList.contains('error') && mainContent.classList.add('error');
        mainContent.classList.remove('content__show');
        console.log(error);
    }
}

function removeOldContent() {
    Object.keys(menuArray).forEach(key => {
        let oldContent = mainContent.querySelector(`.${key}`);
        oldContent && mainContent.removeChild(oldContent);
    })
}



document.addEventListener('DOMContentLoaded', ()=>{
    function getContent(fileName){
        console.log(1);

        let mainContent = document.querySelector('.main__content');
        let divTemp = document.createElement('div');

        let request =  fetch(`components/DistrictContent/${fileName}.html`);
        divTemp.innerHTML =  request.text();

        console.log(divTemp);
    }

})
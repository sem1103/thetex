document.addEventListener('DOMContentLoaded', ()=>{
    let informResurseContainer = document.querySelector('.inform__resources');
    let informSliderRequest = new XMLHttpRequest();

    informSliderRequest.open('GET', 'components/InformSlider/informSlider.html');

    informSliderRequest.onload = ()=>{
        let divTemp = document.createElement('div');
        divTemp.innerHTML = informSliderRequest.responseText;
        console.log(dispatchEvent);
    }
    informSliderRequest.send();
})
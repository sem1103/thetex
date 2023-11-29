document.addEventListener('DOMContentLoaded', ()=>{
    let informResurseContainer = document.querySelector('.inform__resources');
    let informSliderRequest = new XMLHttpRequest();

    informSliderRequest.open('GET', 'components/InformSlider/informSlider.html', true);

    informSliderRequest.onload = ()=>{
        let divTemp = document.createElement('div');
        divTemp.innerHTML = informSliderRequest.responseText;
        informResurseContainer.append(...divTemp.querySelector('#content').children)
    }
    informSliderRequest.send();
})
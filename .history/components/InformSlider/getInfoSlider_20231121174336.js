document.addEventListener('DOMContentLoaded', ()=>{
    let informResurseContainer = document.querySelector('#inform__resources');
    let informSliderRequest = new XMLHttpRequest();

    informSliderRequest.open('GET', 'components/InformSlider/informSlider.html');

    informSliderRequest.onload = ()=>{
       
        let divTemp = document.createElement('div');
        divTemp.innerHTML = informSliderRequest.responseText;
        informResurseContainer.append(...divTemp.querySelector('#content').children);

        $('.inform__slider').owlCarousel({
            items: 4,
            margin: 30,
            loop:true,  
            stagePadding:10,
            dotsEach: true,
            // autoHeight: true,
            responsiveBaseElement: 'body',
            responsive: {
                0: {
                    items: 1,
                    margin:15,
                    stagePadding:0,
                },
                768: {
                    items: 3,
                    margin:20
                },
                1200: {
                    items: 4
                }
            }
        });

    }
    informSliderRequest.send();
})
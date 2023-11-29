document.addEventListener('DOMContentLoaded', ()=>{
    (async function getSlider(){
        let informResurseContainer = document.querySelector
        ('#inform__resources');
        let divTemp = document.createElement('div');
        let request = await fetch('components/InformSlider/informSlider.html', {method: 'GET'});
        let respons = await request.text();
        divTemp.innerHTML = respons;
        informResurseContainer.append(...divTemp.querySelector('#content').children);
        imgLoading();
        $('.inform__slider').owlCarousel({
            items: 4,
            margin: 30,
            loop:true,  
            stagePadding:10,
            dotsEach: true,
            responsiveBaseElement: 'body',
            responsive: {
                0: {
                    items: 1,
                    margin:10,
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

    })();

  
})



function imgLoading(){
    let images = document.querySelectorAll('img');
    let imgAbserver = new IntersectionObserver(item => {
        item.forEach(elem => {
            if (elem.isIntersecting) {
                let src = elem.target.getAttribute('data-src');
                elem.target.setAttribute('src', src);

            }
        })
    }, { threshold: 0.1 });

    setTimeout(()=>{
        images.forEach(item => {
            imgAbserver.observe(item);
            item.setAttribute('decoding', 'async');
        })
    },2000)
}
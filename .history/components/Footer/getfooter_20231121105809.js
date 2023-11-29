document.addEventListener('DOMContentLoaded', ()=>{
    let footerContent = document.querySelector('footer');
    let footerRequest = new XMLHttpRequest();
    console.log(footerContent);
    footerRequest.open('GET', 'components/Footer/footer.html');

    footerRequest.onload = ()=>{ 
        let divTemp = document.createElement('div');
        divTemp.innerHTML = footerRequest.responseText;
        footerContent.append(...divTemp.querySelector('#footer__content').children);
    }

    footerRequest.send();
})
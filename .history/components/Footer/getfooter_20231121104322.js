document.addEventListener('DOMContentLoaded', ()=>{
    let footerContent = document.getElementsByName('footer')[0];
    let footerRequest = new XMLHttpRequest();

    footerRequest.open('GET', 'components/Footer/footer.html');

    footerRequest.onload = ()=>{
        let divTemp = document.createElement('div');
        divTemp.innerHTML = footerRequest.responseText;
        footerContent.append(...divTemp.querySelector('#footer__content').children);
    }
})
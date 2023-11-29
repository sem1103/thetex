document.addEventListener('DOMContentLoaded', ()=>{
    let footerContent = document.getElementsByTagName('footer');
    let footerRequest = new XMLHttpRequest();
    console.dir(footerContent);
    footerRequest.open('GET', 'components/Footer/footer.html');

    footerRequest.onload = ()=>{ 
        let divTemp = document.createElement('div');
        divTemp.innerHTML = footerRequest.responseText;
        // footerContent.;
    }

    footerRequest.send();
})
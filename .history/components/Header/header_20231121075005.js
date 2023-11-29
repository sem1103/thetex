document.addEventListener('DOMContentLoaded', ()=>{
    let headerContaier = document.getElementById('header__content');
    let headerRequest = new XMLHttpRequest();

    headerRequest.open('GET', 'header.html');
    headerRequest.onload = ()=>{
        let divTemp = document.createElement('div');
        divTemp.innerHTML = headerRequest.responseText;
        console.log(divTemp);
    }

})
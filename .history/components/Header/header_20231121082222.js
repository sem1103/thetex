document.addEventListener('DOMContentLoaded', ()=>{
    let headerContaier = document.getElementById('header__content');
    let headerRequest = new XMLHttpRequest();

    headerRequest.open('GET', 'components/Header/header.html');
    headerRequest.onload = ()=>{
        let divTemp = document.createElement('div');
        divTemp.innerHTML = headerRequest.responseText;
        
        console.log(divTemp.document.getElementById('header__contetn').children);
    }

    headerRequest.send()
})
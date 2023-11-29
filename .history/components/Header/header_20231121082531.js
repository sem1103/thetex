document.addEventListener('DOMContentLoaded', ()=>{
    let headerContaier = document.getElementById('header__content');
    let headerRequest = new XMLHttpRequest();

    headerRequest.open('GET', 'components/Header/header.html');
    headerRequest.onload = ()=>{
        let divTemp = document.createElement('div');
        divTemp.innerHTML = headerRequest.responseText;
        headerContaier.append(divTemp.querySelector('#header__content').children)
    }

    headerRequest.send()
})
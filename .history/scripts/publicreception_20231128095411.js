import addBreadCrunps from "./addBreadCrumps.js";


let mainTitle = document.querySelector('h1');
let location = window.location.search.slice(1);
let sideMenu = document.querySelectorAll('.side__menu button');
let breadCrumps = {
    index: 'Главная',
    government: 'Органы власти'
};


addBreadCrunps(breadCrumps)

export default function addBreadCrunps(crumps){
    crumps.forEach(item => {
        let elemLi = document.createElement('li');
        let elemLink = document.createElement('a');
        elemLink.innerText = item;
        elemLi.append(elemLink);
        console.log(elemLi);
    });
};
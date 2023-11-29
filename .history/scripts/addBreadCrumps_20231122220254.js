export default function addBreadCrunps(container,crumps){
    Object.entries(crumps).forEach(([key, value]) => {
        let elemLi = document.createElement('li');
        let elemLink = document.createElement('a');
        elemLink.href = `${key}.html`;
        elemLi.innerText = value;
        elemLi.append(elemLink);
        container.append(elemLi);
        console.log(elemLi);
    });
};
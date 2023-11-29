export default function addBreadCrunps(container,crumps){
    let length = Object.keys(crumps).length;
    Object.entries(crumps).forEach(([key, value]) => {
        let elemLi = document.createElement('li');
        let elemLink = document.createElement('a');
        elemLink.href = `${key}.html`;
        elemLink.innerText = value;
        elemLi.append(elemLink);
        container.append(elemLi);
        if(length != Object.keys(crumps).length){
            let hr = document.createElement('hr');
            hr.classList.add('bread__line');
            container.append(hr);
            console.log(length);
        }
        
    });
};
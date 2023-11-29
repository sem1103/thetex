export default function addBreadCrunps(container,crumps){
    let length = 0;
    container.innerHTML = '';
    Object.entries(crumps).forEach(([key, value]) => {
        let elemLi = document.createElement('li');
        let elemLink = document.createElement('a');
        length++;
        elemLink.href = length < Object.keys(crumps).length ? `${key}.html` : '#';
        elemLink.innerText = value;
        elemLi.append(elemLink);
        container.append(elemLi);
        if(length < Object.keys(crumps).length){
            let hr = document.createElement('hr');
            hr.classList.add('bread__line');
            container.append(hr);
        }        
    });
};
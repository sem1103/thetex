export default function addBreadCrunps(crumps){
    let crumpsContainer = document.querySelector('.bread__crumps');
    let length = 0;
    crumpsContainer.innerHTML = '';
    Object.entries(crumps).forEach(([key, value]) => {
        let elemLi = document.createElement('li');
        let elemLink = document.createElement('a');
        length++;
        if(length < Object.keys(crumps).length) {
            if(key.includes('?')) elemLink.href = key;
            else elemLink.href = `${key}.html`; 
        }else elemLink.href = '#'
        elemLink.innerText = value;
        elemLi.append(elemLink);
        crumpsContainer.append(elemLi);
        if(length < Object.keys(crumps).length){
            let hr = document.createElement('div');
            hr.classList.add('bread__line');
            crumpsContainer.append(hr);
        }        
    });
};
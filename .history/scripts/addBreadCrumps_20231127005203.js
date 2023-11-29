export default function addBreadCrunps(crumps){
    let crumpsContainer = document.querySelector('.bread__crumps');
    let length = 0;
    crumpsContainer.innerHTML = '';
    Object.entries(crumps).forEach(([key, value]) => {
        let elemLi = document.createElement('li');
        let elemLink = document.createElement('a');
        let search = key.includes('?') ? `${key}` : '';
        length++;
        console.log(search);
        if(length < Object.keys(crumps).length) {
            elemLink.href = `${key}.html`;
        }else elemLink.href = '#'
        
        if(key.includes('?')) elemLi.href = key;
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
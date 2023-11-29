export default function addBreadCrunps(crumps){
    Object.entries(crumps).forEach(([key, value]) => {
        let elemLi = document.createElement('li');
        let elemLink = document.createElement('a');
        elemLink.href = `${key}.html`;
        elemLi.append(elemLink);
        console.log(elemLi);

    });
};
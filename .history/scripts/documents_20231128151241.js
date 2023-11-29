import addBreadCrunps from "./addBreadCrumps.js";

let clearForm = document.querySelector('button[type="reset"]');

let dataRange = [];
let calendar = new AirDatepicker('#calendar', {
    range: true,
    onSelect: (data)=>{
            dataRange = data.formattedDate;
    },
    container: document.querySelector('#calendar')
});

let breadCrumps = {
    index: 'Главная',
    documents: 'Документы'
};


clearForm.onclick = () =>{
    calendar.clear();
}

addBreadCrunps(breadCrumps)

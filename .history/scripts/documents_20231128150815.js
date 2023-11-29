import addBreadCrunps from "./addBreadCrumps";

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
    pressCentre: 'Пресс-центр'
};


clearForm.onclick = () =>{
    calendar.clear();
}

addBreadCrunps(breadCrumps)

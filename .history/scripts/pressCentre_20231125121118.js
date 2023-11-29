import addBreadCrunps from "../scripts/addBreadCrumps.js";

let breadCrumps = {
    index: 'Главная',
    pressCentre: 'Пресс-центр'
};
let dataRange = [];
let clearForm = document.querySelector('button[type="reset"]');

let calendar = new AirDatepicker('#calendar', {
    range: true,
    onSelect: (data)=>{
            dataRange = data.formattedDate;
    }
    });



clearForm.onclick = () =>{
    calendar.clear();
}

addBreadCrunps(breadCrumps)

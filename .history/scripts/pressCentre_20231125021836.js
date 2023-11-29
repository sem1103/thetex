import addBreadCrunps from "../scripts/addBreadCrumps.js";

let breadCrumps = {
    index: 'Главная',
    pressCentre: 'Пресс-центр'
};
let clearForm = document.querySelector('button[type="reset"]');

let calendar = new AirDatepicker('#calendar', {
    range: true,
    onSelect: (data)=>{
            console.log(data.formattedDate);
    }
    });

clearForm.onclick = () =>{
    console.log(1);
    calendar.clear();
}

    addBreadCrunps(breadCrumps)

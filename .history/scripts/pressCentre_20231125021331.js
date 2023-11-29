import addBreadCrunps from "../scripts/addBreadCrumps.js";

let breadCrumps = {
    index: 'Главная',
    pressCentre: 'Пресс-центр'
};

addBreadCrunps(breadCrumps)

let calendar = new AirDatepicker('#calendar', {
    range: true,
    onSelect: (data)=>{
            console.log(data.formattedDate);
    }
    });


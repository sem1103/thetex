import addBreadCrunps from "../scripts/addBreadCrumps.js";

let breadCrumps = {
    index: 'Главная',
    pressCentre: 'Пресс-центр'
};

addBreadCrunps(breadCrumps)

new AirDatepicker('#calendar', {
    range: true,
    onSelect: getDataValue(formattedDate)
    });

function getDataValue(data){
    console.log(data);
}
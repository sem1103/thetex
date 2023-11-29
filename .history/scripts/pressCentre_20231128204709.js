let clearForm = document.querySelector('button[type="reset"]');

let dataRange = [];
let calendar = new AirDatepicker('#calendar', {
    range: true,
    onSelect: (data)=>{
            dataRange = data.formattedDate;
    },
    container: document.querySelector('#calendar')
});


clearForm.onclick = () =>{
    calendar.clear();
}



       
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



        /*----VideoGallery----*/
        function playVideo(src, title){
            let modal = document.querySelector('.video__modal');
            let iframe = document.querySelector('.video__modal iframe');
            iframe.setAttribute('src', src);
            iframe.setAttribute('title', title);
    
            modal.classList.toggle('video__modal__show');
            setHeigthIframe();
        };
    
        function closeVideo(e){
            let iframe = document.querySelector('.video__modal iframe');
            iframe.removeAttribute('src');
            e.classList.toggle('video__modal__show');
        }
        window.closeVideo = closeVideo
    
    
        setHeigthIframe()
        function setHeigthIframe(){
            let aspecto = 6/3;
            let iframe = document.querySelector('.video__modal iframe');
            let width = iframe.offsetWidth;
            iframe.height = `${width / aspecto}px`
        };
        window.addEventListener('resize', setHeigthIframe)
        /*----VideoGallery-END---*/
 
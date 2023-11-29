  function setHeigthIframe(){
    let iframe = document.querySelector('.news__video iframe');
    let aspecto = 16/9;
    let width = iframe.offsetWidth;
    iframe.height = `${width / aspecto}px`
};

setHeigthIframe()
